import React from 'react'

import style from './timeline-icon.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TimelineIcon = (props) => {
  return (
    <div className={`${style.timelineIcon} ${props.active ? style.active : ''}`}>
      <FontAwesomeIcon icon={props.icon} />
    </div>
  )
}

export default TimelineIcon
