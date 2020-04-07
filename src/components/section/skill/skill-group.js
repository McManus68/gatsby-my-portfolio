import React from 'react'

import style from './skill-group.module.scss'

import SkillItem from './skill-item'

const SkillGroup = props => {
  return (
    <div className={style.skillGroup}>
      <span className={style.groupName}>{props.group}</span>
      <div className={style.items}>
        {props.data.map((item, index) => {
          return <SkillItem data={item} key={index}></SkillItem>
        })}
      </div>
    </div>
  )
}

export default SkillGroup
