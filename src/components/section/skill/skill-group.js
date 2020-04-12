import React from 'react'

import style from './skill-group.module.scss'

import SkillItem from './skill-item'

const SkillGroup = props => {
  const skills = props.data.sort((a, b) => {
    if (a.level < b.level) return 1
    if (a.level > b.level) return -1
    return 0
  })

  return (
    <div className={style.skillGroup}>
      <span className={style.groupName}>{props.group} </span>
      <div className={style.items}>
        {skills.map((item, index) => {
          return <SkillItem data={item} key={index} />
        })}
      </div>
    </div>
  )
}

export default SkillGroup
