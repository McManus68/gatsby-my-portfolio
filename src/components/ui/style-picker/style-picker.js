import React from 'react'

import style from './style-picker.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StylePicker = props => {
  return (
    <div className={style.stylePicker}>
      <FontAwesomeIcon icon="fill-drip" onClick={props.callback} />
    </div>
  )
}

export default StylePicker
