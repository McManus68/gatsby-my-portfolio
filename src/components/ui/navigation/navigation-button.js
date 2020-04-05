import React from 'react'

import style from './navigation-button.module.scss'

const NavigationButton = props => {
  return (
    <span
      aria-hidden="true"
      className={`${style.navigationButton} ${props.visible ? style.visible : ''}`}
      onClick={() => props.callback(!props.visible)}
    >
      <div className={style.line}></div>
      <div className={style.line}></div>
      <div className={style.line}></div>
    </span>
  )
}

export default NavigationButton
