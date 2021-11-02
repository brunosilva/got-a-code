// packages
import React from 'react'

// components
import Circle from './components/progress-bar/circle'
import Title from './components/title'

// styles
import style from './style.module.scss'

const ComponentList: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.component}>
        <div className={style.titleComponent}>Exemplo de Título</div>
        <div className={style.componentView}>
          <Title
            title="Got a"
            subtitle="CODE"
            description="exemplos de códigos para componentes ReactJs"
          />
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
    </div>
  )
}

export default ComponentList
