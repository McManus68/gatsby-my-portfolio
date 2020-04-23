import React from 'react'
import PropTypes from 'prop-types'

import style from './style-picker.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StylePicker = ({ callback }) => {
  return (
    <div className={style.stylePicker}>
      <FontAwesomeIcon icon="fill-drip" onClick={callback} />
    </div>
  )
}

StylePicker.propTypes = {
  callback: PropTypes.func.isRequired,
}

export default StylePicker
