// packages
import React, { useState, useEffect } from 'react'

// styles
import style from './style.module.scss'
import { ITreeUser, IUser } from './type'
import { dataUser } from './utils'

interface IProps {
  title: string
  subtitle?: string
  description?: string
}

const Organization: React.FC<IProps> = ({ title, subtitle, description }) => {
  const [main, setMain] = useState()
  const [lv1, setLv1] = useState<any>()
  const [lv2, setLv2] = useState()
  const [lv3, setLv3] = useState()

  useEffect(() => {
    const level1 = dataUser.children.filter(item => item.level === 1)

    console.log('level1', level1)

    if (level1) setLv1(level1)
  }, [])

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

        {lv1 &&
          lv1.map(
            (i: any) =>
              (
                <div className={`${style.content} ${style.lv1}`}>
                  <div className={style.position}>
                    <div className={style.user}>
                      <span>{i.name}</span>
                    </div>
                  </div>
                </div>
              ) as any
          )}
        {/* <div className={`${style.content} ${style.lv1}`}>
          <div className={style.position}>
            <div className={style.user}>
              <span>{dataUser.level === 0 && dataUser.name}</span>
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
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Organization
