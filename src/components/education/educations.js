import React from 'react'

import style from './educations.module.scss'

import Separator from '../separator/separator'
import Education from './education'

const Educations = props => {
  return (
    <section data-section="educations">
      <div className={style.educations}>
        <h2>Training</h2>

        <Separator></Separator>

        <div className={style.list}>
          {props.data.map((item, index) => {
            return <Education data={item} key={index}></Education>
          })}
        </div>
      </div>
    </section>
  )
}

export default Educations
