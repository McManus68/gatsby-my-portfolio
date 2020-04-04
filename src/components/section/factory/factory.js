import React from 'react'

import Intro from '../intro/intro'
import AboutMe from '../about-me/about-me'
import Experience from '../experience/experience'
import Education from '../education/education'
import Hobbies from '../hobbie/hobbies'
import Contact from '../contact/contact'

const Factory = props => {
  switch (props.component.name) {
    case 'intro':
      return <Intro data={props.data.me} section={props.component}></Intro>
    case 'about-me':
      return <AboutMe data={props.data.me} section={props.component}></AboutMe>
    case 'experience':
      return <Experience data={props.data.experience.nodes} section={props.component}></Experience>
    case 'hobbie':
      return <Hobbies data={props.data.hobbie.nodes} section={props.component}></Hobbies>
    case 'education':
      return <Education data={props.data.education.nodes} section={props.component}></Education>
    case 'contact':
      return <Contact data={props.data.me} section={props.component}></Contact>
    default:
      return <a>No component for {props.component.name}</a>
  }
}

export default Factory
