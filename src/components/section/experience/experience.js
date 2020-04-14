import React from 'react'

import style from './experience.module.scss'

import Section from '../../ui/section/section'
import TimeLine from '../../ui/timeline/timeline'

const Experience = props => {
  console.log('Redraw Experience')
  return (
    <Section section={props.section} className={style.experience}>
      <TimeLine data={props.data} />
    </Section>
  )
}

export default Experience
