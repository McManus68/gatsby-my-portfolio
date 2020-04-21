import React, { useState } from 'react'

import style from './timeline.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import TimelineItem from './timeline-item'

const Timeline = (props) => {
  const [descending, setDescending] = useState(true)

  props.data.sort((a, b) => {
    if (a.startYear > b.startYear) return descending ? -1 : 1
    else return descending ? 1 : -11
  })

  return (
    <div className={style.timeline}>
      <FontAwesomeIcon
        className={style.sortIcon}
        icon={descending ? 'sort-alpha-down-alt' : 'sort-alpha-up-alt'}
        onClick={() => setDescending(!descending)}
      />
      {props.data.map((item, key) => {
        return <TimelineItem data={item} key={key} id={key} />
      })}
    </div>
  )
}

export default Timeline
