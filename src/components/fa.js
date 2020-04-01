import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'

import {
  faCoffee,
  faFilm,
  faGlobeAmericas,
  faGolfBall,
  faTableTennis,
  faLeaf,
  faTrain,
  faQrcode,
  faBookMedical,
  faUserNinja,
  faWineGlass,
  faBookOpen,
} from '@fortawesome/free-solid-svg-icons'

import { faAngellist } from '@fortawesome/free-brands-svg-icons'

export function initIcons() {
  library.add(
    faCoffee,
    faFilm,
    faGlobeAmericas,
    faGolfBall,
    faTableTennis,
    faLeaf,
    faTrain,
    faQrcode,
    faBookMedical,
    faUserNinja,
    faAngellist,
    faWineGlass,
    faBookOpen
  )
}
