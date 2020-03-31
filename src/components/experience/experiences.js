import React from 'react'

import style from './experiences.module.scss'

import Separator from '../separator/separator'
import Experience from './experience'

const Experiences = props => {
  console.log(props)
  return (
    <section data-section="experiences">
      <div className={style.experiences}>
        <h2>Experiences</h2>

        <Separator></Separator>

        <div className={style.list}>
          {props.data.map((item, index) => {
            return <Experience data={item.node} key={index}></Experience>
          })}
        </div>
      </div>
    </section>
  )
}

export default Experiences
