import React, { useState } from 'react'

import style from './navigation.module.scss'

import NavigationItem from './navigation-item'
import NavigationButton from './navigation-button'

const Navigation = props => {
  let [selected, setSelected] = useState('intro')
  let [visible, setVisible] = useState(false)

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
                callback={setSelected}
              />
            )
          })}
        </ul>
      </nav>
      <NavigationButton callback={setVisible} visible={visible} />
    </div>
  )
}

export default Navigation
