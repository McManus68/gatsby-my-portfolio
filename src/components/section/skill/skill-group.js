import React from 'react'

import style from './skill-group.module.scss'

import SkillItem from './skill-item'

const SkillGroup = (props) => {
  return (
    <div className={style.skillGroup}>
      <span className={`${style.groupName} ${props.category}`}>{props.category}</span>
      <div className={style.items}>
        {props.skills.map((item, index) => {
          return <SkillItem skill={item} category={props.category} key={index} />
        })}
      </div>
    </div>
  )
}

export default SkillGroup
