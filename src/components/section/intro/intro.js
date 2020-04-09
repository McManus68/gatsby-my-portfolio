import React from 'react'

import style from './intro.module.scss'

import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Parallax } from 'react-parallax'
import OnVisible from 'react-on-visible'

import Separator from '../../ui/separator/separator'
import MyParticles from '../../ui/particles/particles'

const Intro = props => {
  const { t } = useTranslation()

  return (
    <section data-section={props.section.name} id={props.section.name}>
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
            <a href="#about-me" className={style.knowMore}>
              <span>{t('intro.button')}</span>
            </a>
          </OnVisible>
        </div>
      </Parallax>

      <MyParticles />
    </section>
  )
}

export default Intro
