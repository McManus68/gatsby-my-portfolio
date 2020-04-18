import React, { useState } from 'react'

import style from './skill.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Section from '../../ui/section/section'
import SkillGroup from './skill-group'
import SkillChart from './skill-chart'

const Skill = (props) => {
  const [modeGraph, setModeGraph] = useState(true)

  const groups = ['backend', 'frontend', 'devops']
  return (
    <Section section={props.section} className={style.skill}>
      <FontAwesomeIcon
        className={style.displayType}
        icon={modeGraph ? 'th-list' : 'project-diagram'}
        onClick={() => setModeGraph(!modeGraph)}
      />

      {modeGraph ? (
        <SkillChart data={props.data} groups={groups} />
      ) : (
        groups.map((group, key) => {
          let groupData = props.data.filter((item) => item.type === group)
          return <SkillGroup data={groupData} group={group} key={key} />
        })
      )}
    </Section>
  )
}

export default Skill
