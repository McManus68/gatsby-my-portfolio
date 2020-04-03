import React from 'react'

import style from './hobbies.module.scss'

import Hobbie from './hobbie'
import Section from '../section/section'

const Hobbies = props => {
  return (
    <section data-section="hobbies" id="hobbies" className={style.hobbies}>
      <Section title="Loisirs">
        <div className={style.items}>
          {props.data.map((item, index) => {
            return <Hobbie data={item} key={index}></Hobbie>
          })}
        </div>
      </Section>
    </section>
  )
}

export default Hobbies
