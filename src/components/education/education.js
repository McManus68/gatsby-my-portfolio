import React from 'react'

import style from './education.module.scss'

import OnVisible from 'react-on-visible'
import PortfolioDiamondIcon from '../portfolio-diamond-icon/portfolio-diamond-icon'

const Education = props => {
  return (
    <div className={style.education}>
      <PortfolioDiamondIcon icon={props.data.icon}></PortfolioDiamondIcon>

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
