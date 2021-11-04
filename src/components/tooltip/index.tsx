// packages
import React from 'react'

// styles
import style from './style.module.scss'

interface TooltipProps {
  title: string
  showIcon: boolean
}

const Tooltip: React.FC<TooltipProps> = ({ title, showIcon, children }) => {
  return (
    <div className={style.container}>
      <div className={style.tooltip}>
        <div className={style.label}>
          {children}{' '}
          {showIcon && (
            <div className={style.iconInfo}>
              <i className={style.icon}>i</i>
            </div>
          )}
        </div>
        {showIcon ? (
          <span className={style.haveIcon}>{title}</span>
        ) : (
          <span className={style.notIcon}>{title}</span>
        )}
      </div>
    </div>
  )
}

export default Tooltip
