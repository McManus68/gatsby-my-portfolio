import React, { Component, useState } from 'react'

import * as d3 from 'd3'

import style from './skill-chart.module.scss'

class SkillChart extends Component {
  componentDidMount() {
    this.drawChart()
  }

  drawChart() {
    // All nodes
    let graphNodes = [...this.props.data]

    // All nodes representing mains groups ( Backend, FrontEnd and Devops)
    let groupNodes = this.props.groups.map((group, key) => {
      return {
        name: group,
        level: 10,
        type: 'group',
      }
    })

    // Create a note for the main groups
    graphNodes.unshift(...groupNodes)

    // Add a root node
    graphNodes.unshift({
      name: 'root',
      level: 15,
      type: 'root',
    })

    console.log('nodes = ', graphNodes)

    // Create links
    let graphLinks = []

    groupNodes.map((root, rootIndex) => {
      graphNodes.forEach((node, nodeIndex) => {
        if (node.type !== 'group' && root.name === node.type) {
          graphLinks.push({ source: rootIndex * 1 + 1, target: nodeIndex })
        }
      })
      graphLinks.push({ source: 0, target: rootIndex * 1 + 1 })
    })

    console.log('links = ', graphLinks)

    // Draw Graph
    var width = 800,
      height = 600

    var svg = d3.select(this.refs.chart).append('svg').attr('width', width).attr('height', height)

    var radius = d3.scaleSqrt().domain([0, 50]).range([0, 20])
    var drag = d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended)

    var simulation = d3
      .forceSimulation()
      .force('link', d3.forceLink())
      .force('charge', d3.forceManyBody().strength(-200))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .on('tick', ticked)
      .stop()

    // Root node for Links and Nodes
    var link = svg.append('g').attr('class', 'link').selectAll('line')
    var node = svg.append('g').attr('class', 'node').selectAll('circle')

    link = link.data(graphLinks).enter().append('line')

    var node = node.data(graphNodes).enter().append('g').call(drag)

    node
      .append('circle')
      .attr('r', function (d) {
        return radius(d.level * 20)
      })
      .attr('class', function (d) {
        switch (d.type) {
          case 'group':
            return d.name
          case 'root':
            return 'root'
          default:
            return d.type
        }
      })

    /*node
      .append('text')
      .attr('dy', '.35em')
      .attr('text-anchor', 'middle')
      .text(function (d) {
        return d.name
      })*/

    node
      .filter(function (d) {
        return d.logo
      })
      .append('image')
      .attr('x', '-16')
      .attr('y', '-16')
      .attr('height', '32')
      .attr('width', '32')
      .attr('href', function (d) {
        return d.logo.fixed.src
      })

    simulation.nodes(graphNodes)
    simulation.force('link').links(graphLinks).distance(80)
    simulation.restart()

    function ticked() {
      link
        .attr('x1', function (d) {
          return d.source.x
        })
        .attr('y1', function (d) {
          return d.source.y
        })
        .attr('x2', function (d) {
          return d.target.x
        })
        .attr('y2', function (d) {
          return d.target.y
        })

      node.attr('transform', function (d) {
        return 'translate(' + d.x + ',' + d.y + ')'
      })
    }

    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart()
      d.fx = d.x
      d.fy = d.y
    }

    function dragged(d) {
      d.fx = d3.event.x
      d.fy = d3.event.y
    }

    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(0)
      d.fx = null
      d.fy = null
    }
  }

  render() {
    return <div ref="chart" className={style.skillChart}></div>
  }
}

export default SkillChart
