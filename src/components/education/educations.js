import React from 'react'

import style from './educations.module.scss'

import Education from './education'
import PortfolioSection from '../portfolio-section/portfolio-section'

const Educations = props => {
  return (
    <section data-section="educations" className={style.educations}>
      <PortfolioSection title="Education">
        <div className={style.items}>
          {props.data.map((item, index) => {
            return <Education data={item} key={index}></Education>
          })}
        </div>
      </PortfolioSection>
    </section>
  )
}

export default Educations
