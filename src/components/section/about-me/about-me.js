import React from 'react'

import style from './about-me.module.scss'

import Section from '../../ui/section/section'

const AboutMe = (props) => {
  return (
    <Section section={props.section} className={style.aboutMe}>
      <div className={style.content}>
        <div className={style.photo}>
          <img src={props.data.photo.fixed.src} alt={props.data.photo.title} />
        </div>

        <div className={style.description}>
          <span className={style.title}>{props.data.descriptionTitle}</span>

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
