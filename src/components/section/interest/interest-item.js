import React from 'react'
import PropTypes from 'prop-types'

import style from './interest-item.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import OnVisible from 'react-on-visible'

const InterestItem = ({ interest }) => {
  return (
    <OnVisible visibleClassName={style.pulse} className={style.interestItem}>
      <FontAwesomeIcon icon={interest.icon} />
      <span className={style.name}>{interest.name}</span>
    </OnVisible>
  )
}

InterestItem.propTypes = {
  interest: PropTypes.object.isRequired,
}

export default InterestItem
