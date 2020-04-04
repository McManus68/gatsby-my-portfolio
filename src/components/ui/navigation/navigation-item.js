import React from 'react'

import style from './navigation-item.module.scss'

const NavigationItem = props => {
  return (
    <li className={`${style.item} ${props.active ? style.active : ''}`}>
      <a href={'#' + props.id} data-nav-section={props.id} onClick={() => props.callback(props.id)}>
        {props.title}{' '}
      </a>
    </li>
  )
}

export default NavigationItem
