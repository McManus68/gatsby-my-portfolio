import React from 'react'

import Intro from '../intro/intro'
import AboutMe from '../about-me/about-me'
import Experience from '../experience/experience'
import Education from '../education/education'
import Interest from '../interest/interest'
import Contact from '../contact/contact'
import Skill from '../skill/skill'

const Factory = props => {
  switch (props.component.name) {
    case 'intro':
      return <Intro data={props.data.me} section={props.component}></Intro>
    case 'about-me':
      return <AboutMe data={props.data.me} section={props.component} bg={props.bg}></AboutMe>
    case 'experience':
      return (
        <Experience
          data={props.data.experience}
          section={props.component}
          bg={props.bg}
        ></Experience>
      )

    case 'interest':
      return (
        <Interest data={props.data.interest} section={props.component} bg={props.bg}></Interest>
      )
    case 'education':
      return (
        <Education data={props.data.education} section={props.component} bg={props.bg}></Education>
      )
    case 'contact':
      return <Contact data={props.data.me} section={props.component}></Contact>
    case 'skill':
      return <Skill data={props.data.skill} section={props.component} bg={props.bg}></Skill>
    default:
      return <span>No component for {props.component.name}</span>
  }
}

export default Factory
