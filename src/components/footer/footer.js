import React from 'react'

import styles from './footer.module.scss'

const Footer = props => {
  return (
    <div className={styles.footer} id="footer">
      <div className="container">
        <span>{props.siteName}</span>
      </div>
    </div>
  )
}

export default Footer
