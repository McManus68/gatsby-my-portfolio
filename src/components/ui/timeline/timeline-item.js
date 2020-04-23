import React, { useState } from 'react'
import PropTypes from 'prop-types'

import style from './timeline-item.module.scss'

import TimelineIcon from './timeline-icon'
import TimelineDescription from './timeline-description'

const TimelineItem = ({ item, id }) => {
  const [active, setActive] = useState(false)
  return (
    <div
      aria-hidden="true"
      className={style.timelineItem}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <TimelineIcon icon={item.icon} active={active} />
      <TimelineDescription item={item} odd={id % 2 !== 0} />
    </div>
  )
}

TimelineItem.propTypes = {
  item: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
}

export default TimelineItem
