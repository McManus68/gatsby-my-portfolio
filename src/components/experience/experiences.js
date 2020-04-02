import React from 'react'

import style from './experiences.module.scss'

import Experience from './experience'
import Section from '../section/section'

const Experiences = props => {
  return (
    <section data-section="experiences" className={style.experiences}>
      <Section title="Experiences">
        <div className={style.items}>
          {props.data.map((item, index) => {
            return <Experience data={item} key={index}></Experience>
          })}
        </div>
      </Section>
    </section>
  )
}

export default Experiences
