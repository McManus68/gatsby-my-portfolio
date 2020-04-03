import React from 'react'

import style from './about-me.module.scss'

import Section from '../section/section'

const AboutMe = props => {
  return (
    <section data-section="about-me" id="about-me" className={style.aboutMe}>
      <Section title="About me">
        <div className={style.content}>
          <div className={style.photo}>
            <img src={props.data.photo.fluid.src} alt="Me" />
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
      </Section>
    </section>
  )
}

export default AboutMe
