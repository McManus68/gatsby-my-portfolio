import React, { useState } from 'react'

import style from './contact.module.scss'

import ContactForm from './contact-form'
import Section from '../section/section'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = props => {
  return (
    <section data-section="contact" className={style.contact}>
      <Section title="Contact">
        <div className={style.contactHeader}>
          <FontAwesomeIcon icon="coffee" />
          <span>test</span>
        </div>
        <ContactForm />
      </Section>
    </section>
  )
}

export default Contact
