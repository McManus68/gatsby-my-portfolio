import React from 'react'

import style from './footer.module.scss'

import { useTranslation } from 'react-i18next'

const Footer = props => {
  const { t } = useTranslation()

  return (
    <div className={style.footer} id="footer">
      <div className="container">
        <span>{t('footer.copyright', { who: props.me.name })}</span>
      </div>
    </div>
  )
}

export default Footer
