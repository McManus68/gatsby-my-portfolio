const initializeData = (props) => {
  console.log('initializeData')
  let d = {}
  // All nodes
  d.nodes = [...props.data]

  // All nodes representing mains groups ( Backend, FrontEnd and Devops)
  const groupNodes = props.groups.map((group, key) => {
    return {
      name: group,
      level: 10,
      type: 'group',
    }
  })

  // Create a note for the main groups
  d.nodes.unshift(...groupNodes)

  // Add a root node
  d.nodes.unshift({
    name: 'root',
    level: 15,
    type: 'root',
  })

  // Create links
  d.links = []

  groupNodes.forEach((root, rootIndex) => {
    d.nodes.forEach((node, nodeIndex) => {
      if (node.type !== 'group' && root.name === node.type) {
        d.links.push({ source: rootIndex * 1 + 1, target: nodeIndex })
      }
    })
    d.links.push({ source: 0, target: rootIndex * 1 + 1 })
  })
  return d
}

export default initializeData
