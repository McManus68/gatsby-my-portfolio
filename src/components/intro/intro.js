import React from 'react'

import style from './intro.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Separator from '../separator/separator'
import Button from '../button/button'
import { Parallax } from 'react-parallax'
import OnVisible from 'react-on-visible'

const Intro = props => {
  return (
    <section data-section="intro" id="intro">
      <Parallax
        bgImage={props.data.bannerImage.fluid.src}
        className={style.background}
        strength={100}
      >
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
        </div>
      </Parallax>
    </section>
  )
}

export default Intro
