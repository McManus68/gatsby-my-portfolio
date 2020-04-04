import React from 'react'

import style from './section.module.scss'

import Separator from '../separator/separator'

const Section = props => {
  return (
    <div className={style.section}>
      <h2>{props.title}</h2>
      <Separator />
      {props.children}
    </div>
  )
}

export default Section
