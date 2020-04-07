import React from 'react'

import style from './skill-item.module.scss'

import OnVisible from 'react-on-visible'

const SkillItem = props => {
  return (
    <OnVisible visibleClassName={style.pulse} className={style.skillItem}>
      <img src={props.data.logo.fluid.src} alt={props.data.logo.title} />
      <span>{props.data.name}</span>
    </OnVisible>
  )
}

export default SkillItem
