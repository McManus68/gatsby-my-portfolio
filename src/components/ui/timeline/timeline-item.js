import React from 'react'

import style from './timeline-item.module.scss'

import TimelineIcon from './timeline-icon'
import TimelineDescription from './timeline-description'

const TimelineItem = props => {
  return (
    <div
      aria-hidden="true"
      className={style.timelineItem}
      onMouseEnter={() => props.callback(props.id)}
    >
      <TimelineIcon icon={props.data.icon} active={props.active === props.id} />
      <TimelineDescription data={props.data} odd={props.id % 2 !== 0} />
    </div>
  )
}

export default TimelineItem
