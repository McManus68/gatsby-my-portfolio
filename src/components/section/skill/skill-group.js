import React from 'react'

import style from './skill-group.module.scss'

import SkillItem from './skill-item'
import DiamondIcon from '../../ui/diamond-icon/diamond-icon'

const SkillGroup = props => {
  const skills = props.data.sort((a, b) => {
    if (a.level < b.level) return 1
    if (a.level > b.level) return -1
    return 0
  })

  return (
    <div className={style.skillGroup}>
      <DiamondIcon title={props.group} />
      <div className={style.items}>
        {skills.map((item, index) => {
          return <SkillItem data={item} key={index} />
        })}
      </div>
    </div>
  )
}

export default SkillGroup
