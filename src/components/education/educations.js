import React from 'react'

import style from './educations.module.scss'

import Education from './education'
import Section from '../section/section'

const Educations = props => {
  return (
    <section data-section="educations" className={style.educations}>
      <Section title="Education">
        <div className={style.items}>
          {props.data.map((item, index) => {
            return <Education data={item} key={index}></Education>
          })}
        </div>
      </Section>
    </section>
  )
}

export default Educations
