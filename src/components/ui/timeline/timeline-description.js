import React from 'react'
import PropTypes from 'prop-types'

import style from './timeline-description.module.scss'

import TimelineImage from './timeline-image'

const TimelineDescription = ({ item, odd }) => {
  return (
    <div className={`${style.timelineDescription} ${odd ? style.odd : ''}`}>
      <div className={style.header}>
        <div className={style.subHeader}>
          <span className={style.date}> {item.period} </span>
          <img alt={item.country.icon.title} src={item.country.icon.file.url}></img>
        </div>

        <span className={style.company}>{item.title}</span>
      </div>
      <span
        className={style.content}
        dangerouslySetInnerHTML={{
          __html: item.description.childMarkdownRemark.html,
        }}
      />

      {item.image ? <TimelineImage image={item.image} /> : null}
    </div>
  )
}

TimelineDescription.propTypes = {
  item: PropTypes.object.isRequired,
  odd: PropTypes.bool.isRequired,
}

export default TimelineDescription
