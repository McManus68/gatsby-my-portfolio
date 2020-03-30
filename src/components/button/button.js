import React from 'react'

import styles from './button.module.scss'

const Button = props => {
  return (
    <a className={styles.button}>
      <span>{props.label}</span>
    </a>
  )
}

export default Button
