import React from 'react'

import style from './experiences.module.scss'

import Section from '../section/section'
import TimeLine from '../timeline/timeline'

const Experience = props => {
  return (
    <section data-section="experience" className={style.experience}>
      <Section title="Experience">
        <TimeLine data={props.data} />
      </Section>
    </section>
  )
}

export default Experience
