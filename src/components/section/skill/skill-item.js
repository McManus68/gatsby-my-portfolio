import React from 'react'

import style from './skill-item.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SkillItem = (props) => {
  var elements = []
  for (var i = 0; i < props.skill.level; i++) {
    elements.push(<FontAwesomeIcon icon={['fa', 'star']} key={i} />)
  }

  return (
    <div className={`${style.skillItem} ${'item-' + props.category}`} data-tip={props.skill.name}>
      <img src={props.skill.logo.fixed.src} alt={props.skill.logo.title} />
      <span>{props.skill.name} </span>
      <div className={`${style.star} ${props.category}`}>{elements}</div>
    </div>
  )
}

export default SkillItem
