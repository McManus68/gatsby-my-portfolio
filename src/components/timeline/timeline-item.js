import React from 'react'

import style from './timeline-item.module.scss'

import TimelineIcon from './timeline-icon'
import TimelineDescription from './timeline-description'

const TimelineItem = props => {
  return (
    <div className={style.timelineItem}>
      <TimelineIcon icon={props.data.icon} />
      <TimelineDescription data={props.data} />
    </div>
  )
}

export default TimelineItem
