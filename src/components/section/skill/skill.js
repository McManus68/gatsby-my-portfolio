import React, { useState } from 'react'

import style from './skill.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Section from '../../ui/section/section'
import SkillGroup from './skill-group'
import SkillChart from './skill-chart'

const Skill = (props) => {
  const [modeGraph, setModeGraph] = useState(false)

  // Get root category using recursivity
  const getRootCategory = (currentCategory) => {
    if (currentCategory.root) return currentCategory.code
    else return getRootCategory(currentCategory.category)
  }

  // For each category, link the its root category
  let categories = [...props.categories]
  categories.forEach((category) => (category['rootCategory'] = getRootCategory(category)))

  // For each skill, link the its root category
  let skills = [...props.skills]
  skills.forEach((skill) => (skill['rootCategory'] = getRootCategory(skill.category)))

  // Get only the root categories
  const rootCategories = categories.filter((category) => category.root)

  return (
    <Section section={props.section} className={style.skill}>
      <FontAwesomeIcon
        className={style.displayType}
        icon={modeGraph ? 'th-list' : 'project-diagram'}
        onClick={() => setModeGraph(!modeGraph)}
      />

      {modeGraph ? (
        <SkillChart skills={skills} categories={categories} />
      ) : (
        rootCategories.map((category, key) => {
          let categorySkills = skills.filter((skill) => skill.rootCategory === category.code)
          return <SkillGroup skills={categorySkills} category={category.code} key={key} />
        })
      )}
    </Section>
  )
}

export default Skill
