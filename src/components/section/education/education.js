import React from 'react'

import style from './education.module.scss'

import Section from '../../ui/section/section'
import TimeLine from '../../ui/timeline/timeline'

const Education = props => {
  return (
    <section data-section="education" id="education" className={style.education}>
      <Section title="Education">
        <TimeLine data={props.data} />
      </Section>
    </section>
  )
}

export default Education
