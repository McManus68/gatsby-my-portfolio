import React from 'react'

import style from './experience.module.scss'

import OnVisible from 'react-on-visible'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Experience = props => {
  return (
    <div className={style.experience}>
      <OnVisible visibleClassName={style.bounceIn} className={style.icon}>
        <FontAwesomeIcon icon={props.data.icon} />
      </OnVisible>

      <OnVisible
        visibleClassName={style.bounceInRight}
        className={style.content}
      >
        <div className={style.date}>{props.data.period}</div>
        <h4>{props.data.title}</h4>
        <span
          dangerouslySetInnerHTML={{
            __html: props.data.description.childMarkdownRemark.html,
          }}
        />
      </OnVisible>
    </div>
  )
}

export default Experience
