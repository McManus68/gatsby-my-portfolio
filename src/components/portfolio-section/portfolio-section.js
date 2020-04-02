import React from 'react'

import style from './portfolio-section.module.scss'

import Separator from '../separator/separator'

const PortfolioSection = props => {
  return (
    <div className={style.portfolioSection}>
      <h2>{props.title}</h2>
      <Separator></Separator>
      {props.children}
    </div>
  )
}

export default PortfolioSection
