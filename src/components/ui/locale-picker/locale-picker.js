import React from 'react'

import style from './locale-picker.module.scss'

import fr from '../../../images/fr.png'
import en from '../../../images/en.png'

const LocalePicker = props => {
  console.log(props.locale)
  return (
    <div className={style.localePicker}>
      <img
        src={props.locale === 'fr' ? en : fr}
        onClick={() => (props.locale === 'fr' ? props.callback('en') : props.callback('fr'))}
        className={style.flag}
      ></img>
    </div>
  )
}

export default LocalePicker
