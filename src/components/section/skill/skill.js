import React, { useState } from 'react'

import style from './skill.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Section from '../../ui/section/section'
import SkillGroup from './skill-group'
import SkillChart from './skill-chart'

const Skill = (props) => {
  const [modeGraph, setModeGraph] = useState(false)

  return (
    <Section section={props.section} className={style.skill}>
      <FontAwesomeIcon
        className={style.displayType}
        icon={modeGraph ? 'th-list' : 'project-diagram'}
        onClick={() => setModeGraph(!modeGraph)}
      />

      {modeGraph ? (
        <SkillChart skills={props.skills} categories={props.categories} />
      ) : (
        props.categories.map((category, key) => {
          let categorySkills = props.skills.filter((skill) => skill.category.code === category.code)
          return <SkillGroup skills={categorySkills} category={category.code} key={key} />
        })
      )}
    </Section>
  )
}

export default Skill
