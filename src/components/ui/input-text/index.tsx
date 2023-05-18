import React, { ReactElement } from 'react'
import s from './input-text.module.scss'

interface Props {
  id: string,
  name: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  required?: boolean
}

export const InputText: React.FC<Props> = ({id, name, value, onChange, required = false}): ReactElement => {
  return (
    <input className={s.input} id={id} name={name} type="text" value={value} onChange={onChange} required={required}/>
  )
}
