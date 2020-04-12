import React from 'react'

import style from './timeline-description.module.scss'

const TimelineDescription = props => {
  return (
    <div className={`${style.timelineDescription} ${props.odd ? style.odd : ''}`}>
      <div className={style.header}>
        <div className={style.date}>{props.data.period}</div>
        <h4>{props.data.title}</h4>
      </div>
      <span
        dangerouslySetInnerHTML={{
          __html: props.data.description.childMarkdownRemark.html,
        }}
      />
    </div>
  )
}

export default TimelineDescription
