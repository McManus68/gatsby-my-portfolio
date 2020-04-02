import React from 'react'

import style from './about-me.module.scss'

import PortfolioSection from '../portfolio-section/portfolio-section'

const AboutMe = props => {
  return (
    <section data-section="about-me" className={style.aboutMe}>
      <PortfolioSection title="About me">
        <div className={style.content}>
          <div className={style.photo}>
            <img src={props.data.photo.fluid.src} />
          </div>

          <div className={style.description}>
            <h3>{props.data.descriptionTitle}</h3>

            <span
              dangerouslySetInnerHTML={{
                __html: props.data.description.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </PortfolioSection>
    </section>
  )
}

export default AboutMe
