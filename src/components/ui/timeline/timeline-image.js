import React from 'react'
import PropTypes from 'prop-types'

import style from './timeline-image.module.scss'

import ModalImage from 'react-modal-image'

const TimelineImage = ({ image }) => {
  return (
    <div className={style.timelineImage}>
      <ModalImage
        hideDownload={true}
        hideZoom={true}
        small={image.fixed.src}
        large={image.file.url}
        alt={image.title}
      />
    </div>
  )
}

TimelineImage.propTypes = {
  image: PropTypes.object.isRequired,
}

export default TimelineImage
