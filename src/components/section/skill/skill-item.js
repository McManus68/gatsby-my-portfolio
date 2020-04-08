import React from 'react'

import style from './skill-item.module.scss'
import ReactTooltip from 'react-tooltip'

const SkillItem = props => {
  return (
    <div className={style.skillItem}>
      <img src={props.data.logo.fluid.src} alt={props.data.logo.title} data-tip={props.data.name} />
      <ReactTooltip place="top" type="success" effect="float" />
    </div>
  )
}

export default SkillItem
