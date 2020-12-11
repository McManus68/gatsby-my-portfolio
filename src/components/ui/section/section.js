import React from 'react'
import PropTypes from 'prop-types'

import style from './section.module.scss'

import Separator from '../separator/separator'

const Section = ({ section, className, children }) => {
  return (
    <section data-section={section.name} id={section.name} className={className}>
      <div className={style.section}>
        <h2>{section.title}</h2>
        <Separator />
        {children}
      </div>
    </section>
  )
}

Section.propTypes = {
  section: PropTypes.object.isRequired,
  className: PropTypes.string,
}

export default Section
