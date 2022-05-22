// packages
import React from 'react'

// components
import Circle from './components/progress-bar/circle'
import Title from './components/title'
import Tooltip from './components/tooltip'
import Accordion from './components/Accordion'
import BarcodeValidate from './components/barcodeValidate'
import Organization from './components/Organization'

// styles
import style from './style.module.scss'
import Component from './components/Component'

const ComponentList: React.FC = () => {
  return (
    <div className={style.container}>
      <Component
        title="Exemplo de Accordion"
        githubLink="https://github.com/brunosilva/got-a-code/tree/main/src/components/Accordion"
        size="sm"
      >
        <Accordion title="Abrir accordion" subtitle="subtitle">
          <div className={style.contentAccordion}>
            <span>Conteudo do accordion</span>
          </div>
        </Accordion>
      </Component>

      <Component
        title="Validar código de barra"
        githubLink="https://github.com/brunosilva/got-a-code/tree/main/src/components/barcodeValidate"
        size="sm"
      >
        <BarcodeValidate />
      </Component>

      <Component
        title="Exemplo de Título"
        githubLink="https://github.com/brunosilva/got-a-code/tree/main/src/components/title"
        size="sm"
      >
        <Title
          title="Got a"
          subtitle="<code>"
          description="Teste de descrição"
        />
      </Component>

      <Component
        title="Exemplo de Barra de progresso circular"
        githubLink="https://github.com/brunosilva/got-a-code/tree/main/src/components/progress-bar/circle"
        size="sm"
      >
        <Circle completed={1} />
      </Component>

      <Component
        title="Exemplo de Tooltip (com e sem icone)"
        githubLink="https://github.com/brunosilva/got-a-code/tree/main/src/components/tooltip"
        size="sm"
      >
        <Tooltip title="Este campo é obrigatório" showIcon={true}>
          <label>Código</label>
        </Tooltip>
      </Component>

      <Component
        title="Exemplo de Organograma"
        githubLink="https://github.com/brunosilva/got-a-code/tree/main/src/components/dateNavigation"
        size="lg"
      >
        <Organization title="Organograma" />
      </Component>
    </div>
  )
}

export default ComponentList
