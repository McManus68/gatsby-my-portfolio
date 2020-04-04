import React from 'react'

import style from './timeline-icon.module.scss'

import OnVisible from 'react-on-visible'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TimelineIcon = props => {
  return (
    <OnVisible
      visibleClassName={style.bounceIn}
      className={`${style.timelineIcon} ${props.active ? style.active : ''}`}
    >
      <FontAwesomeIcon icon={props.icon} />
    </OnVisible>
  )
}

export default TimelineIcon
