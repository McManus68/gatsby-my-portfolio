import React from 'react'

import style from './trainings.module.scss'

import Separator from '../separator/separator'
import Training from './training'

const Trainings = props => {
  return (
    <section data-section="trainings">
      <div className={style.trainings}>
        <h2>Training</h2>

        <Separator></Separator>

        <div className={style.list}>
          {props.data.map((item, index) => {
            return <Training data={item} key={index}></Training>
          })}
        </div>
      </div>
    </section>
  )
}

export default Trainings
