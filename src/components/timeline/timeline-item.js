import React from 'react'

import style from './timeline-item.module.scss'

import DiamondIcon from '../diamond-icon/diamond-icon'
import TimelineDescription from './timeline-description'

const TimelineItem = props => {
  return (
    <div className={style.timelineItem}>
      <DiamondIcon icon={props.data.icon} />
      <TimelineDescription data={props.data} />
    </div>
  )
}

export default TimelineItem
