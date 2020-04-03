import React from 'react'

import style from './timeline.module.scss'

import TimelineItem from './timeline-item'

const Timeline = props => {
  return (
    <div className={style.timeline}>
      {props.data.map((item, key) => {
        return <TimelineItem data={item} key={key} />
      })}
    </div>
  )
}

export default Timeline
