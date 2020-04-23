import React from 'react'
import PropTypes from 'prop-types'

import styles from './button.module.scss'

const Button = ({ label, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <span>{label}</span>
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default Button
