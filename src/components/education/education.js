import React from 'react'

import style from './educations.module.scss'

import Section from '../section/section'
import TimeLine from '../timeline/timeline'

const Education = props => {
  return (
    <section data-section="education" className={style.education}>
      <Section title="Education">
        <TimeLine data={props.data} />
      </Section>
    </section>
  )
}

export default Education
