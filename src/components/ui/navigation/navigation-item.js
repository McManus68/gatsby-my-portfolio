import React from 'react'

import style from './navigation-item.module.scss'

import { HashLink as Link } from 'react-router-hash-link'

const NavigationItem = props => {
  return (
    <li className={`${style.item} ${props.active ? style.active : ''}`}>
      <Link to={'#' + props.name} onClick={() => props.callback(props.name)}>
        {props.title}
      </Link>
    </li>
  )
}

export default NavigationItem
