import React, { useState } from 'react'

import style from './timeline.module.scss'

import TimelineItem from './timeline-item'

const Timeline = props => {
  let [active, setActive] = useState(-1)

  function handleActive(i) {
    setActive(i)
  }

  return (
    <div className={style.timeline}>
      {props.data.map((item, key) => {
        return (
          <TimelineItem data={item} key={key} id={key} active={active} callback={handleActive} />
        )
      })}
    </div>
  )
}

export default Timeline
