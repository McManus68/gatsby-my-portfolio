import React from 'react'

import style from './about-me.module.scss'

import Section from '../../ui/section/section'

const AboutMe = props => {
  return (
    <Section section={props.section} className={style.aboutMe + ' ' + props.bg}>
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
  )
}

export default AboutMe
