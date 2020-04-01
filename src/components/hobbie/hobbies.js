import React from 'react'

import style from './hobbies.module.scss'

import Separator from '../separator/separator'
import Hobbie from './hobbie'

const Hobbies = props => {
  return (
    <section data-section="hobbies">
      <div className={style.hobbies}>
        <h2>Loisirs</h2>

        <Separator></Separator>

        <div className={style.list}>
          {props.data.map((item, index) => {
            return <Hobbie data={item} key={index}></Hobbie>
          })}
        </div>
      </div>
    </section>
  )
}

export default Hobbies
