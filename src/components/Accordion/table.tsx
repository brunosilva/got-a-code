// packages
import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

// utils
import { panels } from './utils'

// styles
import style from './style.module.scss'

interface IProps {
  repositories: string[]
}

const TableList: React.FC<IProps> = ({ repositories }) => {
  console.log('cheguei no table', repositories)
  return (
    <div className={style.container}>
      <div className={style.list}>
        {repositories.map(repo => {
          return (
            <button className={style.titleButtom} role="tab">
              {repo}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default TableList
