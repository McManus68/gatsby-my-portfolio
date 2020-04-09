import React, { useState } from 'react'

import style from './navigation.module.scss'

import Scrollspy from 'react-scrollspy'

import LocalePicker from '../locale-picker/locale-picker'
import NavigationItem from './navigation-item'
import NavigationButton from './navigation-button'

import logo from '../../../assets/images/logo.png'

const Navigation = props => {
  let [selected, setSelected] = useState('intro')
  let [visible, setVisible] = useState(false)

  function handleScroll(e) {
    setSelected(e.id)
  }

  return (
    <div className={style.navigation}>
      <nav className={visible ? style.visible : ''}>
        <LocalePicker locale={props.locale} callback={props.callback} />
        <img alt="logo" className={style.logo} src={logo}></img>

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
      <NavigationButton callback={setVisible} visible={visible} />
    </div>
  )
}

export default Navigation
