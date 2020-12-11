import React from 'react'
import PropTypes from 'prop-types'

import style from './skill-group.module.scss'

import SkillItem from './skill-item'

const SkillGroup = ({ skills, category }) => {
  return (
    <div className={style.skillGroup}>
      <span className={`${style.groupName} ${category}`}>{category}</span>
      <div className={`${style.groupSeparator} ${category}`}></div>
      <div className={style.items}>
        {skills.map((item, index) => {
          return <SkillItem skill={item} category={category} key={index} />
        })}
      </div>
    </div>
  )
}

SkillGroup.propTypes = {
  skills: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
}

export default SkillGroup
