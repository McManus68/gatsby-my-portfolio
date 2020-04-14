import React, { useState } from 'react'

import style from './navigation.module.scss'

import Scrollspy from 'react-scrollspy'

import LocalePicker from '../locale-picker/locale-picker'
import StylePicker from '../style-picker/style-picker'
import NavigationItem from './navigation-item'
import NavigationButton from './navigation-button'

import logo from '../../../assets/images/logo.png'

const Navigation = props => {
  let [selected, setSelected] = useState('intro')
  let [visible, setVisible] = useState(false)
  let [switchingTheme, setSwitchingTheme] = useState(false)

  function handleScroll(e) {
    setSelected(e.id)
  }

  function handleSwitchTheme(e) {
    setSwitchingTheme(true)
    props.switchTheme()
  }

  function handleVisibility(e) {
    console.log('handleVisiblite')
    setSwitchingTheme(false)
    setVisible(!visible)
  }

  return (
    <div className={style.navigation}>
      <nav
        className={`${switchingTheme ? style.disableTransitions : ''} ${
          visible ? style.visible : ''
        }`}
      >
        <img alt="logo" className={style.logo} src={logo}></img>
        <div className={style.header}>
          <StylePicker style={props.style} callback={handleSwitchTheme} />
          <LocalePicker locale={props.locale} callback={props.switchLang} />
        </div>

        <Scrollspy
          items={props.menu.map(function(item) {
            return item.name
          })}
          onUpdate={handleScroll}
        >
          {props.menu.map(function(item, i) {
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

export default Navigation
