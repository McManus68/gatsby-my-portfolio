import React from 'react'

import style from './hero-title.module.scss'

const HeroTitle = (props) => {
  const words = props.designation.split(' ')
  let position = 0
  return (
    <div className={style.heroTitle}>
      {words.map((word, indexWord) => (
        <span className={style.word} key={indexWord}>
          {word.split('').map((letter, indexLetter) => {
            position++
            return (
              <span
                className={style.letter}
                key={indexLetter}
                style={{
                  animationDelay: `${position * 0.1 + 2}s`,
                }}
              >
                {letter}
              </span>
            )
          })}
        </span>
      ))}
    </div>
  )
}

export default HeroTitle
