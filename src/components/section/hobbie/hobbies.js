import React from 'react'

import style from './hobbies.module.scss'

import Hobbie from './hobbie'
import Section from '../../ui/section/section'

const Hobbies = props => {
  return (
    <Section section={props.section} className={style.hobbies}>
      <div className={style.items}>
        {props.data.map((item, index) => {
          return <Hobbie data={item} key={index}></Hobbie>
        })}
      </div>
    </Section>
  )
}

export default Hobbies
