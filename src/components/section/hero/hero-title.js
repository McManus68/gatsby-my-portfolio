import React from 'react'

import style from './hero-title.module.scss'

const HeroTitle = (props) => {
  return (
    <div className={style.heroTitle}>
      {props.designation.split('').map((char, index) => {
        return (
          <span
            className={style.letter}
            key={index}
            style={{
              animationDelay: `${index * 0.1 + 2}s`,
            }}
          >
            {char}
          </span>
        )
      })}
    </div>
  )
}

export default HeroTitle
