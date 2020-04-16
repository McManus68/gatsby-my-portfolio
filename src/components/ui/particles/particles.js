import React from 'react'

import style from './particles.module.scss'

import Particles from 'react-particles-js'

const MyParticles = (props) => {
  return (
    <Particles
      className={style.particles}
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              speed: 2,
              size_min: 0.3,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            random: true,
            speed: 1,
            direction: 'top',
            out_mode: 'out',
          },
        },
      }}
    />
  )
}

export default MyParticles
