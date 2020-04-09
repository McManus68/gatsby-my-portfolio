import React from 'react'

import style from './contact.module.scss'

import ContactForm from './contact-form'
import { Parallax } from 'react-parallax'

import Separator from '../../ui/separator/separator'

import bg from '../../../assets/images/contact.jpg'

const Contact = props => {
  return (
    <section data-section={props.section.name} id={props.section.name}>
      <Parallax bgImage={bg} className={style.background} strength={200}>
        <div className={style.contact}>
          <h2>{props.section.title}</h2>
          <Separator />
          <ContactForm />
        </div>
      </Parallax>
    </section>
  )
}

export default Contact
