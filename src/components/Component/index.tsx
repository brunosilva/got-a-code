// packages
import React from 'react'

// styles
import style from './style.module.scss'

interface IProps {
  title: string
  githubLink: string
  size: string
  children: React.ReactNode
  showGithubLink?: boolean
}

const Component: React.FC<IProps> = ({
  title,
  githubLink,
  size,
  children,
  showGithubLink = true
}) => {
  const sizeComponent = [
    {
      key: 'sm',
      class: style.small
    },
    {
      key: 'md',
      class: style.middle
    },
    {
      key: 'lg',
      class: style.large
    }
  ]

  const styleClass = sizeComponent.find(item => item.key === size)?.class

  return (
    <div className={`${style.component} ${styleClass}`}>
      <div className={style.titleComponent}>{title}</div>
      <div className={style.componentView}>
        {children}
        {showGithubLink && (
          <a href={githubLink} target="_blank" rel="noreferrer" title="">
            code github
          </a>
        )}
      </div>
    </div>
  )
}

export default Component
