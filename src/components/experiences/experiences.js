import React from 'react'

import style from './experiences.module.scss'

import Separator from '../separator/separator'

const Experiences = props => {
  console.log(props)
  return (
    <section data-section="experiences">
      <div className={style.experiences}>
        <h2>Experiences</h2>

        <Separator></Separator>
      </div>
    </section>
  )
}

export default Experiences
