// packages
import React, { ReactNode } from 'react'

// styles
import style from './style.module.scss'

interface IProps {
  children: ReactNode
}
const Home: React.FC<IProps> = ({ children }) => {
  return <div className={style.container}>{children}</div>
}

export default Home
