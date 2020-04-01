import React from 'react'

import style from './hobbie.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import OnVisible from 'react-on-visible'

const Hobbie = props => {
  return (
    <OnVisible visibleClassName={style.pulse} className={style.hobbie}>
      <FontAwesomeIcon icon={props.data.icon} />
      <h3>{props.data.name}</h3>
    </OnVisible>
  )
}

export default Hobbie
