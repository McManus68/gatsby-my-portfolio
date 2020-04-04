import React from 'react'

import style from './contact.module.scss'

import ContactForm from './contact-form'
import Section from '../../ui/section/section'

const Contact = props => {
  return (
    <section data-section="contact" id="contact" className={style.contact}>
      <Section title="Contact">
        <ContactForm />
      </Section>
    </section>
  )
}

export default Contact
