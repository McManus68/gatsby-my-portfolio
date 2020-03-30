import React from 'react'

import style from './about-me.module.scss'

import Separator from '../separator/separator'

const AboutMe = props => {
  console.log(props)
  return (
    <section data-section="about-me">
      <div className={style.aboutMe}>
        <h2>About me</h2>

        <Separator></Separator>

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
      </div>
    </section>
  )
}

export default AboutMe
