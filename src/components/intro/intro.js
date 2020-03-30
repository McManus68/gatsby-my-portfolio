import React from 'react'
import Img from 'gatsby-image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './intro.module.scss'

import Separator from '../separator/separator'
import Button from '../button/button'
import { Parallax } from 'react-scroll-parallax'

const Intro = props => {
  console.log(props.data.bannerImage.fluid)
  return (
    <section data-section="intro">
      <div className={style.intro}>
        <FontAwesomeIcon icon={['fab', 'angellist']} size="4x" />

        <span className={style.name}>{props.data.name}</span>

        <ul className={style.subData}>
          {props.data.bannerList.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>

        <h1>{props.data.designation}</h1>

        <Separator></Separator>

        <Button label="En savoir plus..."></Button>

        <Parallax className={style.background} y={[-50, 50]}>
          <img src={props.data.bannerImage.fluid.src} />
        </Parallax>
      </div>
    </section>
  )
}

export default Intro
