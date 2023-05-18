import React, { useState, ReactElement } from 'react'
import s from './calculator.module.scss'

import { FormField } from '../ui/form-field'
import { InputText } from '../ui/input-text'

interface FormData {
  from: string,
  to: string
}

export const Calculator: React.FC = (): ReactElement => {
  const [formData, setFormData] = useState<FormData>({} as FormData)
  return (
    <form className={s.calc} action="">
      <FormField label='Откуда' forId="1">
        {/* <InputText id="from" name="from" value={formData} onChange={() => setFrom}></InputText> */}
      </FormField>
    </form>
  )
}
