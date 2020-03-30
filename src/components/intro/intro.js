import React from 'react'
import Img from 'gatsby-image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './intro.module.scss'

import Separator from '../separator/separator'
import Button from '../button/button'
import { Parallax } from 'react-scroll-parallax'

const Intro = props => {
  return (
    <section data-section="intro">
      <div className={style.intro}>
        <FontAwesomeIcon icon={['fab', 'angellist']} size="4x" />

        <div className={style.zoomIn}>
          <span className={style.name}>{props.data.name}</span>

          <ul className={style.subData}>
            {props.data.bannerList.map((item, index) => {
              return <li key={index}>{item}</li>
            })}
          </ul>

          <h1>{props.data.designation}</h1>
        </div>

        <div className={style.zoomIn}>
          <Separator></Separator>
        </div>

        <div className={style.fadeInUp}>
          <Button label="En savoir plus..."></Button>
        </div>

        <Parallax className={style.background} y={[-50, 50]}>
          <img src={props.data.bannerImage.fluid.src} />
        </Parallax>
      </div>
    </section>
  )
}

export default Intro
