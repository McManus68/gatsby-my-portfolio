import React from 'react'
import PropTypes from 'prop-types'

import style from './navigation-button.module.scss'

const NavigationButton = ({ visible, callback }) => {
  return (
    <span
      aria-hidden="true"
      className={`${style.navigationButton} ${visible ? style.visible : ''}`}
      onClick={callback}
    >
      <div className={style.line}></div>
      <div className={style.line}></div>
      <div className={style.line}></div>
    </span>
  )
}

NavigationButton.propTypes = {
  visible: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired,
}

export default NavigationButton
