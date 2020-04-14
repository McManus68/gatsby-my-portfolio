import React from 'react'

import style from './navigation-item.module.scss'

import { AnchorLink } from 'gatsby-plugin-anchor-links'

const NavigationItem = props => {
  return (
    <li className={`${style.item} ${props.active ? style.active : ''}`}>
      <AnchorLink to={'/#' + props.name} onClick={() => props.callback(props.name)}>
        {props.title}
      </AnchorLink>
    </li>
  )
}

export default NavigationItem
