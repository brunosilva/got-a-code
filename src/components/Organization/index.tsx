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
              <strong>{dataUser.level === 0 && dataUser.name}</strong>
              <div className={style.infos}>
                <strong>{dataUser.level === 0 && dataUser.name}</strong>
                <span>{dataUser.title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.row}>
        {lv1 &&
          lv1.map(
            (level1: any) =>
              (
                <div
                  className={`${style.content} ${style.lv1}`}
                  key={level1.id}
                >
                  <div className={style.position}>
                    <div className={style.user}>
                      <strong>{level1.name}</strong>
                      <div className={style.infos}>
                        <strong>{level1.name}</strong>
                        <span>{level1.title}</span>
                      </div>
                    </div>
                  </div>
                  {level1.children && (
                    <div className={style.row}>
                      {level1.children.map((level2: any) => (
                        <div
                          className={`${style.content} ${style.lv2}`}
                          key={level2.id}
                        >
                          <div className={style.position}>
                            <div className={style.user}>
                              <strong>{level2.name}</strong>
                              <div className={style.infos}>
                                <strong>{level2.name}</strong>
                                <span>{level2.title}</span>
                              </div>
                            </div>
                          </div>
                          {level2.children && (
                            <div className={style.row}>
                              {level2.children.map((level3: any) => (
                                <div
                                  className={`${style.content} ${style.lv2}`}
                                  key={level3.id}
                                >
                                  <div className={style.position}>
                                    <div className={style.user}>
                                      <strong>{level3.name}</strong>
                                      <div className={style.infos}>
                                        <strong>{level3.name}</strong>
                                        <span>{level3.title}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) as any
          )}
      </div>
    </div>
  )
}

export default Organization
