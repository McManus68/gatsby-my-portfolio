import React from 'react'

import style from './skill.module.scss'

import Section from '../../ui/section/section'
import SkillGroup from './skill-group'

const Skill = props => {
  const groups = ['backend', 'frontend', 'devops']
  return (
    <Section section={props.section} className={style.skill + ' ' + props.bg}>
      {groups.map((group, key) => {
        let groupData = props.data.filter(item => item.type === group)
        return <SkillGroup data={groupData} group={group} key={key}></SkillGroup>
      })}
    </Section>
  )
}

export default Skill
