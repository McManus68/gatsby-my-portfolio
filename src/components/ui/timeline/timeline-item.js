import React, { useState } from 'react'

import style from './timeline-item.module.scss'

import TimelineIcon from './timeline-icon'
import TimelineDescription from './timeline-description'

const TimelineItem = (props) => {
  const [active, setActive] = useState(false)
  return (
    <div
      aria-hidden="true"
      className={style.timelineItem}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <TimelineIcon icon={props.data.icon} active={active} />
      <TimelineDescription data={props.data} odd={props.id % 2 !== 0} />
    </div>
  )
}

export default TimelineItem
