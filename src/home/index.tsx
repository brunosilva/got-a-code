// packages
import React, { ReactNode } from 'react'

// styles
import style from './style.module.scss'

interface IProps {
  children: ReactNode
}
const Home: React.FC<IProps> = ({ children }) => {
  return (
    <div className={style.container}>
      <div className={style.menus}>
        <div className={style.name}>
          <span className={style.first}>GOT A</span>
          <span className={style.second}>{'<code>'}</span>
        </div>
        <div className={style.contact}>
          <div className={style.social}>
            <a
              href="https://www.linkedin.com/in/bruno-silva0109/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/brunosilva"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
          <div className={style.dev}>
            <span>Bruno Silva</span>
          </div>
        </div>
      </div>
      <div className={style.content}>{children}</div>
    </div>
  )
}

export default Home
