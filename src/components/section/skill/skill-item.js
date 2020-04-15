import React from 'react'

import style from './skill-item.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SkillItem = (props) => {
  var elements = []
  for (var i = 0; i < props.data.level; i++) {
    elements.push(<FontAwesomeIcon icon={['fa', 'star']} key={i} />)
  }

  return (
    <div className={`${style.skillItem} ${'item-' + props.group}`} data-tip={props.data.name}>
      <img src={props.data.logo.fixed.src} alt={props.data.logo.title} />
      <span>{props.data.name} </span>
      <div className={`${style.star} ${props.group}`}>{elements}</div>
    </div>
  )
}

export default SkillItem
