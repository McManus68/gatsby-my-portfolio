import React, { useState } from 'react'
import PropTypes from 'prop-types'

import style from './skill.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Section from '../../ui/section/section'
import SkillGroup from './skill-group'
import SkillChart from './skill-chart'

const Skill = ({ skills, categories, section }) => {
  const [modeGraph, setModeGraph] = useState(false)

  return (
    <Section section={section} className={style.skill}>
      <FontAwesomeIcon
        className={style.displayType}
        icon={modeGraph ? 'th-list' : 'project-diagram'}
        onClick={() => setModeGraph(!modeGraph)}
      />

      {modeGraph ? (
        <SkillChart skills={skills} categories={categories} />
      ) : (
        categories.map((category, key) => {
          let categorySkills = skills.filter((skill) => skill.category.code === category.code)
          return <SkillGroup skills={categorySkills} category={category.code} key={key} />
        })
      )}
    </Section>
  )
}

Skill.propTypes = {
  skills: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  section: PropTypes.object.isRequired,
}

export default Skill
