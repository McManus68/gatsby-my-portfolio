import React, { useEffect, useState, useRef } from 'react'

import * as d3 from 'd3'

import style from './skill-chart.module.scss'

import initializeData from './skill-chart-data.js'

import avatar from '../../../assets/images/avatar.png'

const SkillChart = (props) => {
  const [data, setData] = useState(initializeData(props))

  const d3Ref = useRef(null)

  useEffect(() => {
    const handleResize = debounce(() => {
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
        fn.apply(this, arguments)
      }, ms)
    }
  }

  const drawChart = () => {
    let width = Math.min(window.innerWidth - 50, 1500)
    let height = Math.min(window.innerHeight, 1200)

    const ticked = () => {
      link
        .attr('x1', (d) => d.source.x)
        .attr('y1', (d) => d.source.y)
        .attr('x2', (d) => d.target.x)
        .attr('y2', (d) => d.target.y)

      node.attr('transform', (d) => 'translate(' + d.x + ',' + d.y + ')')
    }

    /* Graph Listeners */
    const dragstarted = (d) => {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart()
      d.fx = d.x
      d.fy = d.y
    }

    const dragged = (d) => {
      d.fx = d3.event.x
      d.fy = d3.event.y
    }

    const dragended = (d) => {
      if (!d3.event.active) simulation.alphaTarget(0)
      d.fx = null
      d.fy = null
    }

    const mouseover = (d) => {
      tooltip.style('opacity', 1)
    }

    const mousemove = (d) => {
      tooltip
        .html(d.name)
        .style('left', d3.event.pageX + 10 + 'px')
        .style('top', d3.event.pageY - 10 + 'px')
    }
    const mouseleave = (d) => {
      tooltip.transition().duration(200).style('opacity', 0)
    }

    // Clean old Graph
    d3.select(d3Ref.current).select('svg').remove()
    d3.select(d3Ref.current).select('div.tooltip').remove()

    // Draw Graph
    var svg = d3.select(d3Ref.current).append('svg').attr('width', width).attr('height', height)
    var radius = d3.scaleSqrt().domain([0, 20]).range([0, 50])
    var drag = d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended)

    var simulation = d3
      .forceSimulation()
      .force('link', d3.forceLink())
      .force('charge', d3.forceManyBody().strength(-100))
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

    // Draw all circles except root node
    node
      .filter((d) => d.type !== 'root')
      .append('circle')
      .attr('r', (d) => (d.type === 'skill' ? radius(5) : radius(d.level)))
      .attr('class', (d) => d.rootCategory + ' ' + d.type)

    // Add mouse listeners on techno nodes to display a tooltip
    node
      .filter((d) => d.type === 'skill')
      .on('mouseover', mouseover)
      .on('mousemove', mousemove)
      .on('mouseleave', mouseleave)

    // Draw the root node
    node
      .filter((d) => d.type === 'root')
      .append('image')
      .attr('class', 'avatar')
      .attr('x', '-35')
      .attr('y', '-35')
      .attr('height', '70')
      .attr('width', '70')
      .attr('href', avatar)

    // Add the text for the groups nodes
    node
      .filter((d) => d.type === 'group')
      .append('text')
      .attr('class', (d) => d.rootCategory)
      .attr('dy', '.35em')
      .attr('text-anchor', 'middle')
      .text((d) => d.name)

    // Add the icon for the technos nodes
    node
      .filter((d) => d.logo)
      .append('image')
      .attr('x', '-16')
      .attr('y', '-16')
      .attr('height', '32')
      .attr('width', '32')
      .attr('href', (d) => d.logo.fixed.src)

    simulation.nodes(data.nodes)
    simulation.force('link').links(data.links).distance(140)
    simulation.restart()
  }

  return <div ref={d3Ref} className={style.skillChart}></div>
}

export default SkillChart
