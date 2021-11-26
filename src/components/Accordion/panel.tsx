// packages
import React, { useMemo, useState } from 'react'

// utils
import { panels } from './utils'

// styles
import style from './style.module.scss'

interface IProps {
  isActive: boolean
  label?: string
  content?: string
  children: React.ReactNode
}

const Accordion: React.FC<IProps> = ({ isActive, label, content }) => {
  const [state, setState] = useState()
  const innerStyle = {
    height: `${isActive ? 200 : 0}px`
  }

  // const activateTab = useMemo(index => {
  //   setState(prev => ({
  //     activeTab: prev.activeTab === index ? -1 : index
  //   }))
  // }, [])
  return (
    <div className="panel" role="tabpanel" aria-expanded={isActive}>
      <button
        className="panel__label"
        role="tab"
        // onClick={activateTab(this.index)}
      >
        {label}
      </button>
      <div className="panel__inner" style={innerStyle} aria-hidden={!isActive}>
        <p className="panel__content">{content}</p>
      </div>
    </div>
  )
}

export default Accordion
