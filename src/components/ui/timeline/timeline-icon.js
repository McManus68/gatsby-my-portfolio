import React from 'react'
import PropTypes from 'prop-types'

import style from './timeline-icon.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TimelineIcon = ({ icon, active }) => {
  return (
    <div className={`${style.timelineIcon} ${active ? style.active : ''}`}>
      <FontAwesomeIcon icon={icon} />
    </div>
  )
}

TimelineIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
}

export default TimelineIcon
