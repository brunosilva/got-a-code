// packages
import React from 'react'

// styles
import style from './style.module.scss'

interface IProps {
  title: string
  subtitle?: string
  description?: string
}

const Title: React.FC<IProps> = ({ title, subtitle, description }) => {
  return (
    <div className={style.container}>
      <div className={style.option}>
        <span className={style.title}>
          {title} <strong>{subtitle}</strong>
        </span>
        <span className={style.description}>{description}</span>
      </div>
    </div>
  )
}

export default Title
