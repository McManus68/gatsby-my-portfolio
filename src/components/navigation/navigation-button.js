import React from 'react'

import style from './navigation-button.module.scss'

const NavigationButton = props => {
  return (
    <div
      className={`${style.navigationButton} ${props.visible ? style.visible : ''}`}
      onClick={props.callback}
    >
      <div className={style.line}></div>
      <div className={style.line}></div>
      <div className={style.line}></div>
    </div>
  )
}

export default NavigationButton
