import React from 'react'

import style from './timeline-description.module.scss'

const TimelineDescription = props => {
  return (
    <div className={`${style.timelineDescription} ${props.odd ? style.odd : ''}`}>
      <div className={style.header}>
        <div className={style.subHeader}>
          <span className={style.date}> {props.data.period} </span>
          <img alt={props.data.country.icon.title} src={props.data.country.icon.file.url}></img>
        </div>

        <h4>{props.data.title}</h4>
      </div>
      <span
        class={style.content}
        dangerouslySetInnerHTML={{
          __html: props.data.description.childMarkdownRemark.html,
        }}
      />
    </div>
  )
}

export default TimelineDescription
