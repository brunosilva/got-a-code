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
  const [result, setResult] = useState('')
  const [type, _] = useState('EAN')

  const handleSubmit = useCallback(
    values => {
      const barCodeValid = barCodeValidator(values, type)
      console.log('barCodeValid', barCodeValid)
      console.log('values.barcode', values.barcode)
      if (!barCodeValid) {
        const styleCurrent = `${style.statusError} ${style.inputError}`
        console.log('cheguei no if')
        setResult('cheguei no if')
        setStyleStatus(styleCurrent)
        // toast.error('Verifique se o código está correto e tente novamente.')
      } else {
        const styleCurrent = `${style.statusSuccesss} ${style.inputSuccess}`
        // alert('barcode valido')
        console.log('cheguei no else')
        setResult('cheguei no else')
        setStyleStatus(styleCurrent)
        // toast.success('Obrigatório preencher todos os campos')
        // return isUpdate ? updateSavedCode(values) : handleAddBarCode(values)
      }
    },
    [type]
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
