import React from 'react'

import style from './navigation-item.module.scss'

const NavigationItem = props => {
  return (
    <li className={`${style.item} ${props.active ? style.active : ''}`}>
      <a href={'#' + props.name} onClick={() => props.callback(props.name)}>
        {props.title}
      </a>
    </li>
  )
}

export default NavigationItem
