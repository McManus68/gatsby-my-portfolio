import React from 'react'

import style from './timeline-image.module.scss'

import ModalImage from 'react-modal-image'

const TimelineImage = (props) => {
  return (
    <div className={style.timelineImage}>
      <ModalImage
        hideDownload={true}
        hideZoom={true}
        small={props.image.fixed.src}
        large={props.image.file.url}
        alt={props.image.title}
      />
    </div>
  )
}

export default TimelineImage
