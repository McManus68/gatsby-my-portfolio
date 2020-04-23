import React from 'react'
import PropTypes from 'prop-types'

import style from './education.module.scss'

import Section from '../../ui/section/section'
import TimeLine from '../../ui/timeline/timeline'

const Education = ({ educations, section }) => {
  return (
    <Section section={section} className={style.education}>
      <TimeLine data={educations} />
    </Section>
  )
}

Education.propTypes = {
  educations: PropTypes.array.isRequired,
  section: PropTypes.object.isRequired,
}

export default Education
