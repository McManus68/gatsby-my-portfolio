import React from 'react'

import style from './skill-group.module.scss'

import SkillItem from './skill-item'

const SkillGroup = props => {
  const handleOnDragStart = e => e.preventDefault()

  return (
    <div className={style.skillGroup}>
      {props.data.map((item, index) => {
        return <SkillItem data={item} key={index} />
      })}
    </div>
  )
}

export default SkillGroup
