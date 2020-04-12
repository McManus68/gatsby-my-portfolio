import React from 'react'

import style from './timeline-image.module.scss'

const TimelineImage = props => {
  return (
    <div className={style.timelineImage}>
      {props.image ? <img src={props.image.fluid.src} alt={props.image.title} /> : null}
    </div>
  )
}

export default TimelineImage
