import React from 'react'
import PropTypes from 'prop-types'

import style from './contact.module.scss'

import ContactForm from './contact-form'
import { Parallax } from 'react-parallax'

import Separator from '../../ui/separator/separator'

import bg from '../../../assets/images/contact.jpg'

const Contact = ({ section }) => {
  return (
    <section data-section={section.name} id={section.name}>
      <Parallax bgImage={bg} className={style.background} strength={200}>
        <div className={style.contact}>
          <h2>{section.title}</h2>
          <Separator />
          <ContactForm />
        </div>
      </Parallax>
    </section>
  )
}

Contact.propTypes = {
  section: PropTypes.object.isRequired,
}

export default Contact
