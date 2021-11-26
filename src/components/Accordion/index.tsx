// packages
import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

// utils
import { panels } from './utils'

// styles
import style from './style.module.scss'

interface IProps {
  title: string
  icon?: string
  subtitle?: string
  children: React.ReactNode
}

const Accordion: React.FC<IProps> = ({ title, subtitle, children }) => {
  const [repositories, setRepositories] = useState([])
  const [user, setUser] = useState('')
  const [erro, setErro] = useState(false)
  const history = useHistory()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handlePesquisa = (repo: string) => {
    axios
      .get(`https://api.github.com/users/${repo}/repos`)
      .then(response => {
        const repos = response.data
        setRepositories(repos)
        console.log('repositories', repositories)
        // const repositoriesName = []

        // repositories.map(repository => {
        //   repositoriesName.push(repository.name)
        // })

        // localStorage.setItem(
        //   'repositoriesName',
        //   JSON.stringify(repositoriesName)
        // )
        setErro(false)
        // history.push('/repositories')
      })
      .catch(() => {
        setErro(true)
      })
  }

  const handleSubmit = useCallback(
    value => {
      console.log(value)
      handlePesquisa(value)
    },
    [handlePesquisa]
  )

  return (
    <div className={style.container}>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="user" />
          <button type="submit">Buscar</button>
        </form>
      </div>

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

export default Accordion
