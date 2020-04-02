import React from 'react'

import style from './experiences.module.scss'

import Experience from './experience'
import PortfolioSection from '../portfolio-section/portfolio-section'

const Experiences = props => {
  return (
    <section data-section="experiences" className={style.experiences}>
      <PortfolioSection title="Experiences">
        <div className={style.items}>
          {props.data.map((item, index) => {
            return <Experience data={item} key={index}></Experience>
          })}
        </div>
      </PortfolioSection>
    </section>
  )
}

export default Experiences
