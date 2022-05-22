// packages
import React, { useState } from 'react'

// styles
import style from './style.module.scss'
import { IUser } from './type'
import { dataUser } from './utils'

interface IProps {
  title: string
  subtitle?: string
  description?: string
}

const Organization: React.FC<IProps> = ({ title, subtitle, description }) => {
  const [main, setMain] = useState()

  return (
    <div className={style.container}>
      <div className={style.row}>
        <div className={`${style.content} ${style.lv0}`}>
          <div className={style.position}>
            <div className={style.user}>
              <span>{dataUser.level === 0 && dataUser.name}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={style.row}>
        <div className={style.bar}></div>
        <div className={`${style.content} ${style.lv1}`}>
          <div className={style.position}>
            <div className={style.user}>
              <span>{dataUser.level === 0 && dataUser.name}</span>
            </div>
          </div>
          <div className={style.row}>
            <div className={style.bar}></div>
            <div className={`${style.content} ${style.lv2}`}>
              <div className={style.position}>
                <div className={style.user}>
                  <span>{dataUser.level === 0 && dataUser.name}</span>
                </div>
              </div>
            </div>
            <div className={`${style.content} ${style.lv2}`}>
              <div className={style.position}>
                <div className={style.user}>
                  <span>{dataUser.level === 0 && dataUser.name}</span>
                </div>
              </div>
            </div>
            <div className={`${style.content} ${style.lv2}`}>
              <div className={style.position}>
                <div className={style.user}>
                  <span>{dataUser.level === 0 && dataUser.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${style.content} ${style.lv1}`}>
          <div className={style.position}>
            <div className={style.user}>
              <span>{dataUser.level === 0 && dataUser.name}</span>
            </div>
          </div>
        </div>
        <div className={`${style.content} ${style.lv1}`}>
          <div className={style.position}>
            <div className={style.user}>
              <span>{dataUser.level === 0 && dataUser.name}</span>
            </div>
          </div>
          <div className={style.row}>
            <div className={style.bar}></div>
            <div className={`${style.content} ${style.lv2}`}>
              <div className={style.position}>
                <div className={style.user}>
                  <span>{dataUser.level === 0 && dataUser.name}</span>
                </div>
              </div>
            </div>
            <div className={`${style.content} ${style.lv2}`}>
              <div className={style.position}>
                <div className={style.user}>
                  <span>{dataUser.level === 0 && dataUser.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Organization
