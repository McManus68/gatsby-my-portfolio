import React from 'react'

import style from './diamond-icon.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DiamondIcon = props => {
  return (
    <div className={style.diamondIcon}>
      <FontAwesomeIcon icon={props.icon} />
    </div>
  )
}

export default DiamondIcon
