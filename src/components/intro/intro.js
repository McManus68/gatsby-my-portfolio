import React from 'react'

import style from './intro.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Separator from '../separator/separator'
import Button from '../button/button'
import { Parallax } from 'react-scroll-parallax'
import OnVisible from 'react-on-visible'

const Intro = props => {
  return (
    <section data-section="intro">
      <div className={style.intro}>
        <OnVisible visibleClassName={style.animateIcon}>
          <FontAwesomeIcon icon={['fab', 'angellist']} size="4x" />
        </OnVisible>

        <OnVisible visibleClassName={style.zoomIn} className={style.header}>
          <span className={style.name}>{props.data.name}</span>

          <ul className={style.subTitle}>
            {props.data.bannerList.map((item, index) => {
              return <li key={index}>{item}</li>
            })}
          </ul>

          <h1>{props.data.designation}</h1>
        </OnVisible>

        <OnVisible visibleClassName={style.zoomIn}>
          <Separator></Separator>
        </OnVisible>

        <OnVisible visibleClassName={style.fadeInUp}>
          <Button label="En savoir plus..."></Button>
        </OnVisible>

        <Parallax className={style.background} y={[-50, 50]}>
          <img src={props.data.bannerImage.fluid.src} alt="Cover" />
        </Parallax>
      </div>
    </section>
  )
}

export default Intro
