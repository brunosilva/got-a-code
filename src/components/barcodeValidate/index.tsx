// packages
import React, { useCallback, useState } from 'react'
import { toast } from 'react-toastify'

// utils
import { barCodeValidator } from './utils'

// styles
import style from './style.module.scss'
import 'react-toastify/dist/ReactToastify.css'

const BarcodeValidate: React.FC = () => {
  const [statusError, setStatusError] = useState('')
  const [result, setResult] = useState('')
  const [type, _] = useState('EAN')

  const handleSubmit = useCallback(values => {
    const barCodeValid = barCodeValidator(values.bar_code_number, type)
    if (!barCodeValid) {
      setResult('cheguei no if')
      setStatusError(style.statusError)
      toast.error('Verifique se o código está correto e tente novamente.')
    } else {
      setResult('cheguei no else')
      setStatusError('')
      toast.success('Obrigatório preencher todos os campos')
      // return isUpdate ? updateSavedCode(values) : handleAddBarCode(values)
    }
  }, [])

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Código de barras</label>
        <input
          placeholder="ex.: 789123456789"
          name="barcode"
          required
          type="text"
          // className={stateError ? stateError : ''}
        />

        <button type="button" className="btn btn-submit">
          Salvar
        </button>
      </form>
      <div>{result}</div>
    </>
  )
}

export default BarcodeValidate
