// packages
import React, { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'

// utils
import { barCodeValidator } from './utils'

// styles
import style from './style.module.scss'
import 'react-toastify/dist/ReactToastify.css'

const BarcodeValidate: React.FC = () => {
  const [styleStatus, setStyleStatus] = useState('')
  const [newBarcode, setNewBarcode] = useState<string>('')
  const [styleCurrent, setStyleCurrent] = useState<string>('')
  const [result, setResult] = useState('')
  const [type, _] = useState('EAN')

  const handleSubmit = useCallback(
    values => {
      const barCodeValid = barCodeValidator(values, type)

      if (!barCodeValid) {
        setStyleCurrent(`${style.statusError} ${style.inputError}`)
        setResult('cheguei no if')
        setStyleStatus(styleCurrent)
      } else {
        setStyleCurrent(`${style.statusSuccesss} ${style.inputSuccess}`)
        setResult('cheguei no else')
        setStyleStatus(styleCurrent)

        // Em caso de sucesso, deve fazer aqui a chamada na API.
      }
    },
    [styleCurrent, type]
  )

  useEffect(() => {
    handleSubmit(newBarcode)
  }, [handleSubmit, newBarcode])

  return (
    <div className={style.container}>
      <div className={style.message}>
        <div className={styleStatus ? styleStatus : ''}>{result}</div>
      </div>
      <form>
        <label>Código de barras</label>
        <input
          placeholder="ex.: 789123456789"
          name="barcode"
          type="text"
          onChange={event => setNewBarcode(event.target.value)}
          className={styleStatus ? styleStatus : ''}
        />
      </form>
    </div>
  )
}

export default BarcodeValidate
