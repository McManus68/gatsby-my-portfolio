import React from 'react'

import styles from './button.module.scss'

const Button = props => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      <span>{props.label}</span>
    </button>
  )
}

export default Button
