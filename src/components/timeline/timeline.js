import React from 'react'

import style from './timeline.module.scss'

import TimelineItem from './timeline-item'

const Timeline = props => {
  return (
    <div className={style.timeline}>
      {props.data.map(item => {
        return <TimelineItem data={item} />
      })}
    </div>
  )
}

export default Timeline
