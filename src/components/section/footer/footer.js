import React from 'react'

import style from './footer.module.scss'

const Footer = props => {
  return (
    <div className={style.footer} id="footer">
      <div className="container">
        <span>{props.siteName}</span>
      </div>
    </div>
  )
}

export default Footer
