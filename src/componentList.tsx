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
          <a
            href="https://github.com/brunosilva/got-a-code/tree/main/src/components/title"
            target="_blank"
            rel="noreferrer"
            title=""
          >
            code github
          </a>
        </div>
      </div>
      <div className={style.component}>
        <div className={style.titleComponent}>
          Exemplo de Barra de progresso circular
        </div>
        <div className={style.componentView}>
          <Circle completed={1} />
          <a
            href="https://github.com/brunosilva/got-a-code/tree/main/src/components/progress-bar/circle"
            target="_blank"
            rel="noreferrer"
            title=""
          >
            code github
          </a>
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
          <a
            href="https://github.com/brunosilva/got-a-code/tree/main/src/components/tooltip"
            target="_blank"
            rel="noreferrer"
            title=""
          >
            code github
          </a>
        </div>
      </div>
    </div>
  )
}

export default ComponentList
