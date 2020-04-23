const initializeData = (skills, categories) => {
  let d = { nodes: [], links: [] }

  // Create the root node
  d.nodes.push({
    name: 'root',
    level: 15,
    type: 'root',
  })

  categories.forEach((category) => {
    category['level'] = 15
    category['type'] = 'group'
  })
  // Create the group nodes
  d.nodes.push(...categories)

  // Create the skills nodes
  skills.forEach((skill) => {
    skill['type'] = 'skill'
  })
  d.nodes.push(...skills)

  // Create a structure to map the INDEX of all the nodes
  let map = new Map()
  d.nodes.forEach((node, index) => {
    map.set(node.code || node.name, index)
  })

  // Create all the link betweens root node and categories
  categories.forEach((category) => {
    d.links.push({ source: 0, target: map.get(category.code) })
  })

  // Create all the links between skills and their category
  skills.forEach((node, index) => {
    d.links.push({ source: map.get(node.category.code), target: map.get(node.name) })
  })

  return d
}

export default initializeData
