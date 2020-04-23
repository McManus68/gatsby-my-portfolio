import React from 'react'
import PropTypes from 'prop-types'

import style from './skill-item.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SkillItem = ({ skill, category }) => {
  var elements = []
  for (var i = 0; i < skill.level; i++) {
    elements.push(<FontAwesomeIcon icon={['fa', 'star']} key={i} />)
  }

  return (
    <div className={`${style.skillItem} ${'item-' + category}`} data-tip={skill.name}>
      <img src={skill.logo.fixed.src} alt={skill.logo.title} />
      <span>{skill.name} </span>
      <div className={`${style.star} ${category}`}>{elements}</div>
    </div>
  )
}

SkillItem.propTypes = {
  skill: PropTypes.object.isRequired,
  category: PropTypes.string.isRequired,
}

export default SkillItem
