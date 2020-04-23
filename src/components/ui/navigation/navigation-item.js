import React from 'react'
import PropTypes from 'prop-types'

import style from './navigation-item.module.scss'

import { AnchorLink } from 'gatsby-plugin-anchor-links'

const NavigationItem = ({ name, title, active, callback }) => {
  return (
    <li className={`${style.item} ${active ? style.active : ''}`}>
      <AnchorLink to={'/#' + name} onClick={() => callback(name)}>
        {title}
      </AnchorLink>
    </li>
  )
}

NavigationItem.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired,
}

export default NavigationItem
