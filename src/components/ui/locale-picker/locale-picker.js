import React from 'react'
import PropTypes from 'prop-types'

import style from './locale-picker.module.scss'

import fr from '../../../assets/images/fr.png'
import en from '../../../assets/images/en.png'

const LocalePicker = ({ locale, callback }) => {
  return (
    <div className={style.localePicker}>
      <img
        aria-hidden="true"
        onClick={() => callback('fr')}
        alt="fr"
        src={fr}
        className={`${style.flag} ${locale === 'fr' ? style.highlight : ''}`}
      ></img>
      <img
        aria-hidden="true"
        onClick={() => callback('en')}
        alt="en"
        src={en}
        className={`${style.flag} ${locale === 'en' ? style.highlight : ''}`}
      ></img>
    </div>
  )
}

LocalePicker.propTypes = {
  locale: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
}

export default LocalePicker
