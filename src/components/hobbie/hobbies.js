import React from 'react'

import style from './hobbies.module.scss'

import Hobbie from './hobbie'
import PortfolioSection from '../portfolio-section/portfolio-section'

const Hobbies = props => {
  return (
    <section data-section={props.name} className={style.hobbies}>
      <PortfolioSection title="Loisirs">
        <div className={style.items}>
          {props.data.map((item, index) => {
            return <Hobbie data={item} key={index}></Hobbie>
          })}
        </div>
      </PortfolioSection>
    </section>
  )
}

export default Hobbies
