import React from 'react'

import style from './training.module.scss'

import OnVisible from 'react-on-visible'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Training = props => {
  return (
    <div className={style.training}>
      <OnVisible visibleClassName={style.bounceIn} className={style.icon}>
        <FontAwesomeIcon icon={props.data.icon} />
      </OnVisible>

      <OnVisible
        visibleClassName={style.bounceInRight}
        className={style.content}
      >
        <div className={style.date}>{props.data.period}</div>
        <h4>{props.data.title}</h4>
        <span>{props.data.description}</span>
      </OnVisible>
    </div>
  )
}

export default Training
