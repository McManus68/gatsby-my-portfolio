import React, { useEffect, useState, useRef } from 'react'

import * as d3 from 'd3'

import style from './skill-chart.module.scss'

import initializeData from './skill-chart-data.js'

import avatar from '../../../assets/images/avatar.png'

const SkillChart = (props) => {
  const [data, setData] = useState(initializeData(props))

  const d3Ref = useRef(null)

  useEffect(() => {
    const handleResize = debounce(function handleResize() {
      console.log(window)
      drawChart()
    }, 1000)

    window.addEventListener('resize', handleResize)
    drawChart()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  function debounce(fn, ms) {
    let timer
    return (_) => {
      clearTimeout(timer)
      timer = setTimeout((_) => {
        timer = null
        console.log('decounce')
        fn.apply(this, arguments)
      }, ms)
    }
  }

  const drawChart = () => {
    let width = window.innerWidth - 30
    width = width > 1000 ? 1000 : width
    let height = window.innerHeight
    height = height > 600 ? 600 : height

    console.log('Dimension = ', width, height)

    const ticked = function () {
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

    const dragstarted = function (d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart()
      d.fx = d.x
      d.fy = d.y
    }

    const dragged = function (d) {
      d.fx = d3.event.x
      d.fy = d3.event.y
    }

    const dragended = function (d) {
      if (!d3.event.active) simulation.alphaTarget(0)
      d.fx = null
      d.fy = null
    }

    // Clean old Graph
    d3.select(d3Ref.current).select('svg').remove()
    d3.select(d3Ref.current).select('div.tooltip').remove()

    // Draw Graph
    var svg = d3.select(d3Ref.current).append('svg').attr('width', width).attr('height', height)
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
    var tooltip = d3
      .select(d3Ref.current)
      .append('div')
      .style('opacity', 0)
      .attr('class', 'tooltip')

    link = link.data(data.links).enter().append('line')

    node = node.data(data.nodes).enter().append('g').call(drag)

    // Add a tooltip div. Here I define the general feature of the tooltip: stuff that do not depend on the data point.
    // Its opacity is set to 0: we don't see it by default.

    // A function that change this tooltip when the user hover a point.
    // Its opacity is set to 1: we can now see it. Plus it set the text and position of tooltip depending on the datapoint (d)
    const mouseover = function (d) {
      tooltip.style('opacity', 1)
    }

    const mousemove = function (d) {
      tooltip
        .html(d.name)
        .style('left', d3.event.pageX + 10 + 'px') // It is important to put the +90: other wise the tooltip is exactly where the point is an it creates a weird effect
        .style('top', d3.event.pageY - 10 + 'px')
    }

    // A function that change this tooltip when the leaves a point: just need to set opacity to 0 again
    const mouseleave = function (d) {
      tooltip.transition().duration(200).style('opacity', 0)
    }

    // Draw all nodes excepts the root node
    node
      .filter(function (d) {
        return d.type !== 'root'
      })
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

    // Add mouse listeners on techno nodes to display a tooltip
    node
      .filter(function (d) {
        return d.type !== 'root' && d.type !== 'group'
      })
      .on('mouseover', mouseover)
      .on('mousemove', mousemove)
      .on('mouseleave', mouseleave)

    // Draw the root node
    node
      .filter(function (d) {
        return d.type === 'root'
      })
      .append('image')
      .attr('class', 'avatar')
      .attr('x', '-32')
      .attr('y', '-32')
      .attr('height', '64')
      .attr('width', '64')
      .attr('href', avatar)

    // Add the text for the groups nodes
    node
      .filter(function (d) {
        return d.type === 'group'
      })
      .append('text')
      .attr('class', function (d) {
        return d.name
      })
      .attr('dy', '.35em')
      .attr('text-anchor', 'middle')
      .text(function (d) {
        return d.name
      })

    // Add the icon for the technos nodes
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

    simulation.nodes(data.nodes)
    simulation.force('link').links(data.links).distance(80)
    simulation.restart()
  }

  return <div ref={d3Ref} className={style.skillChart}></div>
}

export default SkillChart
