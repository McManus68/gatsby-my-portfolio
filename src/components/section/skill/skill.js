import React from 'react'

import style from './skill.module.scss'

import Section from '../../ui/section/section'
import SkillGroup from './skill-group'

const Skill = props => {
  const groups = ['backend', 'frontend', 'devops']
  return (
    <Section section={props.section} className={style.skill}>
      {groups.map(group => {
        let groupData = props.data.filter(item => item.type === group)
        return <SkillGroup data={groupData} group={group}></SkillGroup>
      })}
    </Section>
  )
}

export default Skill
