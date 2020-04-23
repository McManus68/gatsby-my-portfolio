import React from 'react'
import PropTypes from 'prop-types'

import style from './interest.module.scss'

import InterestItem from './interest-item'
import Section from '../../ui/section/section'

const Interest = ({ interests, section }) => {
  return (
    <Section section={section} className={style.interest}>
      <div className={style.items}>
        {interests.map((interest, index) => {
          return <InterestItem interest={interest} key={index}></InterestItem>
        })}
      </div>
    </Section>
  )
}

Interest.propTypes = {
  interests: PropTypes.array.isRequired,
  section: PropTypes.object.isRequired,
}

export default Interest
