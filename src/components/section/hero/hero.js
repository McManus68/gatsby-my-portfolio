import React from 'react'

import style from './hero.module.scss'

import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import OnVisible from 'react-on-visible'
import HeroTitle from './hero-title'
import Separator from '../../ui/separator/separator'
import MyParticles from '../../ui/particles/particles'

const Hero = (props) => {
  const { t } = useTranslation()
  return (
    <section data-section={props.section.name} id={props.section.name}>
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

          <HeroTitle designation={props.data.designation} />
        </OnVisible>

        <OnVisible visibleClassName={style.zoomIn}>
          <Separator></Separator>
        </OnVisible>

        <OnVisible visibleClassName={style.fadeInUp}>
          <AnchorLink to="/#about-me" className={style.knowMore}>
            <span>{t('intro.button')}</span>
          </AnchorLink>
        </OnVisible>
      </div>
      <MyParticles />
    </section>
  )
}

export default Hero
