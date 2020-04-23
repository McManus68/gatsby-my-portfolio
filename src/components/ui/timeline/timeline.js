import React, { useState } from 'react'
import PropTypes from 'prop-types'

import style from './timeline.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import TimelineItem from './timeline-item'

const Timeline = ({ data }) => {
  const [descending, setDescending] = useState(true)

  data.sort((a, b) => {
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
      {data.map((item, key) => {
        return <TimelineItem item={item} key={key} id={key} />
      })}
    </div>
  )
}

Timeline.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Timeline
