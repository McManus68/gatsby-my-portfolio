import React from 'react'
import PropTypes from 'prop-types'

import style from './about-me.module.scss'

import Section from '../../ui/section/section'

const AboutMe = ({ me, section }) => {
  return (
    <Section section={section} className={style.aboutMe}>
      <div className={style.content}>
        <div className={style.photo}>
          <img src={me.photo.fixed.src} alt={me.photo.title} />
        </div>

        <div className={style.description}>
          <span className={style.title}>{me.descriptionTitle}</span>

          <span
            dangerouslySetInnerHTML={{
              __html: me.description.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    </Section>
  )
}

AboutMe.propTypes = {
  me: PropTypes.object.isRequired,
  section: PropTypes.object.isRequired,
}

export default AboutMe
