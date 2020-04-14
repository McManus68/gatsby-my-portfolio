import React from 'react'

import style from './education.module.scss'

import Section from '../../ui/section/section'
import TimeLine from '../../ui/timeline/timeline'

const Education = props => {
  return (
    <Section section={props.section} className={style.education}>
      <TimeLine data={props.data} />
    </Section>
  )
}

export default Education
