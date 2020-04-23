import React from 'react'
import PropTypes from 'prop-types'

import style from './experience.module.scss'

import Section from '../../ui/section/section'
import TimeLine from '../../ui/timeline/timeline'

const Experience = ({ experiences, section }) => {
  return (
    <Section section={section} className={style.experience}>
      <TimeLine data={experiences} />
    </Section>
  )
}

Experience.propTypes = {
  experiences: PropTypes.array.isRequired,
  section: PropTypes.object.isRequired,
}

export default Experience
