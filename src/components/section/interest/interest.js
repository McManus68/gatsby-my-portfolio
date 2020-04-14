import React from 'react'

import style from './interest.module.scss'

import InterestItem from './interest-item'
import Section from '../../ui/section/section'

const Interest = props => {
  return (
    <Section section={props.section} className={style.interest}>
      <div className={style.items}>
        {props.data.map((item, index) => {
          return <InterestItem data={item} key={index}></InterestItem>
        })}
      </div>
    </Section>
  )
}

export default Interest
