import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './experience.module.scss'

const Experience = props => {
  return (
    <div className={style.experience}>
      <div className={style.icon}>
        <FontAwesomeIcon icon={props.data.icon} size="2x" />
      </div>

      <div className={style.content}>
        <div className={style.date}>{props.data.period}</div>
        <h4>{props.data.title}</h4>
        <span
          dangerouslySetInnerHTML={{
            __html: props.data.description.childMarkdownRemark.html,
          }}
        />
      </div>
    </div>
  )
}

export default Experience
