import React from 'react'

import style from './hobbie.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import OnVisible from 'react-on-visible'

const Hobbie = props => {
  return (
    <OnVisible visibleClassName={style.bounceIn} className={style.hobbie}>
      <FontAwesomeIcon icon={props.data.icon} />
      <span>{props.data.name}</span>
    </OnVisible>
  )
}

export default Hobbie
