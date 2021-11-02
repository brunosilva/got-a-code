// packages
import React, { useMemo } from 'react'

// styles
import style from './style.module.scss'

// assets
import { ReactComponent as ProgressBarImg } from '../../../assets/svg/bg.svg'
import ProductBoxImg from '../../../assets/svg/box.png'

interface IProps {
  completed: number
}

const Circle: React.FC<IProps> = ({ completed }) => {
  // keyframes references -------------------------
  //   empty    = 0% { stroke-dashoffset: 500; }
  //   ten      = 9% { stroke-dashoffset: 429; }
  //   twenty   = 22% { stroke-dashoffset: 358; }
  //   thirty   = 35% { stroke-dashoffset: 287; }
  //   fourty   = 48% { stroke-dashoffset: 216; }
  //   fifty    = 61% { stroke-dashoffset: 145; }
  //   sixty    = 74% { stroke-dashoffset: 74; }
  //   seventy  = 87% { stroke-dashoffset: 225; }
  //   hundred  = 100% { stroke-dashoffset: 174; }
  // ----------------------------------------------

  const isValidCompleted = completed >= 0 && typeof completed === 'number'

  const handleProgress = useMemo(() => {
    switch (completed) {
      case 1:
        return `${style.skill} ${style.ten}`
      case 2:
        return `${style.skill} ${style.twenty}`
      case 3:
        return `${style.skill} ${style.thirty}`
      case 4:
        return `${style.skill} ${style.fourty}`
      case 5:
        return `${style.skill} ${style.fifty}`
      case 6:
        return `${style.skill} ${style.sixty}`
      case 7:
        return `${style.skill} ${style.seventy}`
      case 8:
        return `${style.skill} ${style.eighty}`
      case 9:
        return `${style.skill} ${style.ninety}`
      case 10:
        return `${style.skill} ${style.ten}`
      default:
        return `${style.skill} ${style.empty}`
    }
  }, [completed])

  return (
    <div className={style.progressBar}>
      {isValidCompleted ? (
        <div className={`${handleProgress}`} id="handleProgress">
          <div className={style.outer}>
            <div className={style.inner}>
              <div className={style.bgMiddle}>
                <img src={ProductBoxImg} alt="" />
              </div>
            </div>
          </div>
          <ProgressBarImg />
        </div>
      ) : (
        <div className={style.messageError}>
          <div className={style.outer}>
            <div className={style.inner}>
              <span>Não foi possível carregar as informações</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Circle
