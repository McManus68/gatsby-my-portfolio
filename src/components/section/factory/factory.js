import React from 'react'
import PropTypes from 'prop-types'

import Hero from '../hero/hero'
import AboutMe from '../about-me/about-me'
import Experience from '../experience/experience'
import Education from '../education/education'
import Interest from '../interest/interest'
import Contact from '../contact/contact'
import Skill from '../skill/skill'

const Factory = ({ data, component }) => {
  switch (component.name) {
    case 'hero':
      return <Hero me={data.me} section={component} />
    case 'about-me':
      return <AboutMe me={data.me} section={component} />
    case 'experience':
      return <Experience experiences={data.experiences} section={component} />
    case 'interest':
      return <Interest interests={data.interests} section={component} />
    case 'education':
      return <Education educations={data.educations} section={component} />
    case 'contact':
      return <Contact section={component} />
    case 'skill':
      return <Skill skills={data.skills} categories={data.categories} section={component} />
    default:
      return <span>No component for {component.name}</span>
  }
}

Factory.propTypes = {
  data: PropTypes.object.isRequired,
  component: PropTypes.object.isRequired,
}

export default Factory
