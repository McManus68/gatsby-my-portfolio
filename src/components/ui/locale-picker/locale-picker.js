import React from 'react'

import style from './locale-picker.module.scss'

import fr from '../../../assets/images/fr.png'
import en from '../../../assets/images/en.png'

const LocalePicker = props => {
  return (
    <div className={style.localePicker}>
      <img
        aria-hidden="true"
        onClick={() => props.callback('fr')}
        alt="fr"
        src={fr}
        className={`${style.flag} ${props.locale === 'fr' ? style.highlight : ''}`}
      ></img>
      <img
        aria-hidden="true"
        onClick={() => props.callback('en')}
        alt="en"
        src={en}
        className={`${style.flag} ${props.locale === 'en' ? style.highlight : ''}`}
      ></img>
    </div>
  )
}

export default LocalePicker
