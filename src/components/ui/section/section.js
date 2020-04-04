import React from 'react'

import style from './section.module.scss'

import Separator from '../separator/separator'

const Section = props => {
  return (
    <section data-section={props.section.name} id={props.section.name} className={props.className}>
      <div className={style.section}>
        <h2>{props.section.title}</h2>
        <Separator />
        {props.children}
      </div>
    </section>
  )
}

export default Section
