import React, { useState } from 'react'

import style from './navigation.module.scss'

import NavigationItem from './navigation-item'
import NavigationButton from './navigation-button'

const Navigation = props => {
  let [selected, setSelected] = useState('')
  let [visible, setVisible] = useState(false)

  function handleSelect(e) {
    setSelected(e)
  }

  function handleVisible() {
    setVisible(!visible)
  }

  const items = [
    { id: 'intro', title: 'Accueil' },
    { id: 'about-me', title: 'Présentation' },
    { id: 'experience', title: 'Experiences' },
    { id: 'hobbies', title: 'Loisirs' },
    { id: 'education', title: 'Education' },
    { id: 'contact', title: 'Contact' },
  ]

  return (
    <div className={style.navigation}>
      <nav className={visible ? style.visible : ''}>
        <ul>
          {items.map(function(item, i) {
            return (
              <NavigationItem
                id={item.id}
                key={i}
                title={item.title}
                active={selected === item.id}
                callback={handleSelect}
              />
            )
          })}
        </ul>
      </nav>
      <NavigationButton callback={handleVisible} visible={visible} />
    </div>
  )
}

export default Navigation
