// packages
import React from 'react'

// utils
import { panels } from './utils'

// styles
import style from './style.module.scss'

interface IProps {
  title: string
  icon?: string
  subtitle?: string
  children: React.ReactNode
}

const Accordion: React.FC<IProps> = ({ title, subtitle, children }) => {
  return (
    // <div className="panel" role="tabpanel" aria-expanded={isActive}>
    //   <button className="panel__label" role="tab" onClick={activateTab}>
    //     {label}
    //   </button>
    //   <div className="panel__inner" style={innerStyle} aria-hidden={!isActive}>
    //     <p className="panel__content">{content}</p>
    //   </div>
    // </div>

    // <div className={style.container}>
    //   <button className={style.titleButtom} role="tab">
    //     {title} <strong>{subtitle}</strong>
    //   </button>
    //   <div className={style.title}>
    //     <div className={style.content}>{children}</div>
    //   </div>
    // </div>
    <></>
  )
}

export default Accordion
