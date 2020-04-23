import React from 'react'
import PropTypes from 'prop-types'

import style from './diamond-icon.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DiamondIcon = ({ title, icon }) => {
  return (
    <div className={style.diamondIcon}>
      {icon ? <FontAwesomeIcon icon={icon} /> : null}
      {title ? <span className={style.title}>{title}</span> : null}
    </div>
  )
}

DiamondIcon.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
}

export default DiamondIcon
