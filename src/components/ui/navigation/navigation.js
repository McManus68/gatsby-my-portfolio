import React, { useState } from 'react'
import PropTypes from 'prop-types'

import style from './navigation.module.scss'

import Scrollspy from 'react-scrollspy'

import LocalePicker from '../locale-picker/locale-picker'
import StylePicker from '../style-picker/style-picker'
import NavigationItem from './navigation-item'
import NavigationButton from './navigation-button'

import logo from '../../../assets/images/logo.png'

const Navigation = ({ menus, locale, switchLang, switchTheme }) => {
  let [selected, setSelected] = useState('intro')
  let [visible, setVisible] = useState(false)

  function handleScroll(e) {
    setSelected(e.id)
  }

  function handleVisibility(e) {
    setVisible(!visible)
  }

  return (
    <div className={style.navigation}>
      <nav className={visible ? style.visible : ''}>
        <img alt="logo" className={style.logo} src={logo}></img>
        <div className={style.header}>
          <StylePicker callback={switchTheme} />
          <LocalePicker locale={locale} callback={switchLang} />
        </div>

        <Scrollspy
          items={menus.map(function (item) {
            return item.name
          })}
          onUpdate={handleScroll}
        >
          {menus.map(function (item, i) {
            return (
              <NavigationItem
                name={item.name}
                key={i}
                title={item.title}
                active={selected === item.name}
                callback={setSelected}
              />
            )
          })}
        </Scrollspy>
      </nav>
      <NavigationButton callback={handleVisibility} visible={visible} />
    </div>
  )
}

Navigation.propTypes = {
  menus: PropTypes.array.isRequired,
  locale: PropTypes.string.isRequired,
  switchLang: PropTypes.func.isRequired,
  switchTheme: PropTypes.func.isRequired,
}

export default Navigation
