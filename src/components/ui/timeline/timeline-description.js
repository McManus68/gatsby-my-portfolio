import React from 'react'

import style from './timeline-description.module.scss'

import OnVisible from 'react-on-visible'

const TimelineDescription = props => {
  return (
    <OnVisible
      visibleClassName={style.bounceInRight}
      className={`${style.timelineDescription} ${props.odd ? style.odd : ''}`}
    >
      <div className={style.date}>{props.data.period}</div>
      <h4>{props.data.title}</h4>
      <span
        dangerouslySetInnerHTML={{
          __html: props.data.description.childMarkdownRemark.html,
        }}
      />
    </OnVisible>
  )
}

export default TimelineDescription
