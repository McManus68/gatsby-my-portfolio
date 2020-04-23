import React from 'react'
import PropTypes from 'prop-types'

import style from './footer.module.scss'

import { useTranslation } from 'react-i18next'

const Footer = ({ me }) => {
  const { t } = useTranslation()

  return (
    <div className={style.footer} id="footer">
      <div className="container">
        <span>{t('footer.copyright', { who: me.name })}</span>
      </div>
    </div>
  )
}

Footer.propTypes = {
  me: PropTypes.object.isRequired,
}

export default Footer
