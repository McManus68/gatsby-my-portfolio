import React from 'react'

import style from './education.module.scss'

import OnVisible from 'react-on-visible'
import DiamondIcon from '../diamond-icon/diamond-icon'

const Education = props => {
  return (
    <div className={style.education}>
      <DiamondIcon icon={props.data.icon} />

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

export default Education
