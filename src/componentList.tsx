// packages
import React from 'react'

// components
import Circle from './components/progress-bar/circle'
import Title from './components/title'
import Tooltip from './components/tooltip'

// styles
import style from './style.module.scss'

const ComponentList: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.component}>
        <div className={style.titleComponent}>Exemplo de Título</div>
        <div className={style.componentView}>
          <Title title="Got a" subtitle="<code>" description="" />
        </div>
      </div>
      <div className={style.component}>
        <div className={style.titleComponent}>
          Exemplo de Barra de progresso circular
        </div>
        <div className={style.componentView}>
          <Circle completed={1} />
        </div>
      </div>
      <div className={style.component}>
        <div className={style.titleComponent}>
          Exemplo de Tooltip (com e sem icone)
        </div>
        <div className={style.componentView}>
          <Tooltip title="Este campo é obrigatório" showIcon={true}>
            <label>Código</label>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

export default ComponentList
