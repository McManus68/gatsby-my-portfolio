import React from 'react'

import style from './diamond-icon.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DiamondIcon = props => {
  return (
    <div className={style.diamondIcon}>
      {props.icon ? <FontAwesomeIcon icon={props.icon} /> : null}
      {props.title ? <span className={style.title}>{props.title}</span> : null}
    </div>
  )
}

export default DiamondIcon
