import React from 'react'

import style from './portfolio-diamond-icon.module.scss'

import OnVisible from 'react-on-visible'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PortfolioDiamondIcon = props => {
  return (
    <OnVisible visibleClassName={style.bounceIn} className={style.diamondIcon}>
      <FontAwesomeIcon icon={props.icon} />
    </OnVisible>
  )
}

export default PortfolioDiamondIcon
