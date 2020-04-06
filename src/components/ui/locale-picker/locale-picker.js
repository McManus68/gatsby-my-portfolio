import React from 'react'

import style from './locale-picker.module.scss'

import fr from '../../../assets/images/fr.png'
import en from '../../../assets/images/en.png'

const LocalePicker = props => {
  return (
    <div
      className={style.localePicker}
      aria-hidden="true"
      onClick={() => (props.locale === 'fr' ? props.callback('en') : props.callback('fr'))}
    >
      <img alt={props.locale} src={props.locale === 'fr' ? en : fr} className={style.flag}></img>
    </div>
  )
}

export default LocalePicker
