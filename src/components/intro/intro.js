import React from 'react'
import Img from 'gatsby-image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './intro.module.scss'

import Separator from '../separator/separator'
import Button from '../button/button'

const Intro = props => {
  console.log(props.data.bannerImage.fluid)
  return (
    <section data-section="intro">
      <div className={styles.intro}>
        <FontAwesomeIcon icon={['fab', 'angellist']} size="4x" />

        <span className={styles.name}>{props.data.name}</span>

        <ul className={styles.subData}>
          {props.data.bannerList.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>

        <h1>{props.data.designation}</h1>

        <Separator></Separator>

        <Button label="En savoir plus..."></Button>

        <div className={styles.background}>
          <Img fluid={props.data.bannerImage.fluid} />
        </div>
      </div>
    </section>
  )
}

export default Intro
