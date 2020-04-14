import React from 'react'

import style from './skill-group.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SkillItem from './skill-item'

const SkillGroup = props => {
  const skills = props.data.sort((a, b) => {
    if (a.level < b.level) return 1
    if (a.level > b.level) return -1
    return 0
  })

  const icons = new Map()
  icons.set('backend', 'database')
  icons.set('frontend', 'paint-roller')
  icons.set('devops', 'tools')

  return (
    <div className={style.skillGroup}>
      <span className={`${style.groupName} ${props.group}`}>
        <FontAwesomeIcon icon={icons.get(props.group)} />
        {props.group}
      </span>
      <div className={style.items}>
        {skills.map((item, index) => {
          return <SkillItem data={item} group={props.group} key={index} />
        })}
      </div>
    </div>
  )
}

export default SkillGroup
