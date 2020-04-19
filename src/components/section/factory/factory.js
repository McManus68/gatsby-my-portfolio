import React from 'react'

import Hero from '../hero/hero'
import AboutMe from '../about-me/about-me'
import Experience from '../experience/experience'
import Education from '../education/education'
import Interest from '../interest/interest'
import Contact from '../contact/contact'
import Skill from '../skill/skill'

const Factory = (props) => {
  switch (props.component.name) {
    case 'hero':
      return <Hero data={props.data.me} section={props.component} />
    case 'about-me':
      return <AboutMe data={props.data.me} section={props.component} />
    case 'experience':
      return <Experience experiences={props.data.experiences} section={props.component} />
    case 'interest':
      return <Interest interests={props.data.interests} section={props.component} />
    case 'education':
      return <Education educations={props.data.educations} section={props.component} />
    case 'contact':
      return <Contact data={props.data.me} section={props.component} />
    case 'skill':
      return (
        <Skill
          skills={props.data.skills}
          categories={props.data.categories}
          section={props.component}
        />
      )
    default:
      return <span>No component for {props.component.name}</span>
  }
}

export default Factory
