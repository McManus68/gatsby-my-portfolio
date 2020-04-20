const initializeData = (props) => {
  console.log('initializeData')

  let d = { nodes: [], links: [] }

  // Create the root node
  d.nodes.push({
    name: 'root',
    level: 15,
    type: 'root',
  })

  let categories = [...props.categories]

  categories.forEach((category) => {
    category['level'] = category.root ? 15 : 8
    category['type'] = 'group'
  })
  // Create the group nodes
  d.nodes.push(...categories)

  // Create the skills nodes
  let skills = [...props.skills]
  skills.forEach((skill) => {
    skill['type'] = 'skill'
  })
  d.nodes.push(...skills)

  // Create a structure to map the INDEX of all the nodes
  let map = new Map()
  d.nodes.forEach((node, index) => {
    map.set(node.code || node.name, index)
  })

  // Create all the link betweens categories
  categories.forEach((category) => {
    if (category.root) {
      d.links.push({ source: 0, target: map.get(category.code) })
    } else {
      d.links.push({
        source: map.get(category.category.code),
        target: map.get(category.code),
      })
    }
  })

  // Create all the links between skills and their category
  skills.forEach((node, index) => {
    if (node.type === 'skill') {
      d.links.push({ source: map.get(node.category.code), target: map.get(node.name) })
    }
  })

  return d
}

export default initializeData
