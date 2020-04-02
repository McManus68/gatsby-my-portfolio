import React from 'react'

import styles from './button.module.scss'

const Button = props => {
  return (
    <button className={styles.button}>
      <span>{props.label}</span>
    </button>
  )
}

export default Button
