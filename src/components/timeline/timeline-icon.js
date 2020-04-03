import React from 'react'

import style from './timeline-icon.module.scss'

import OnVisible from 'react-on-visible'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Timelinecon = props => {
  return (
    <OnVisible visibleClassName={style.bounceIn} className={style.timelineIcon}>
      <FontAwesomeIcon icon={props.icon} />
    </OnVisible>
  )
}

export default Timelinecon
