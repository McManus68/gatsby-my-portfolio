import React, { useState } from 'react'

import style from './timeline.module.scss'

import TimelineItem from './timeline-item'

const Timeline = props => {
  let [active, setActive] = useState(-1)

  return (
    <div className={style.timeline}>
      {props.data.map((item, key) => {
        return <TimelineItem data={item} key={key} id={key} active={active} callback={setActive} />
      })}
    </div>
  )
}

export default Timeline
