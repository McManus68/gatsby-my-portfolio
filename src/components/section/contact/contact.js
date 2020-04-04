import React from 'react'

import style from './contact.module.scss'

import ContactForm from './contact-form'
import Section from '../../ui/section/section'

const Contact = props => {
  return (
    <Section section={props.section} className={style.contact}>
      <ContactForm />
    </Section>
  )
}

export default Contact
