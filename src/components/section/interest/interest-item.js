import React from 'react'

import style from './interest-item.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import OnVisible from 'react-on-visible'

const InterestItem = (props) => {
  return (
    <OnVisible visibleClassName={style.pulse} className={style.interestItem}>
      <FontAwesomeIcon icon={props.interest.icon} />
      <span className={style.name}>{props.interest.name}</span>
    </OnVisible>
  )
}

export default InterestItem
