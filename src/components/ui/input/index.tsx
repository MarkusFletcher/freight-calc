import React, { ReactElement } from 'react'
import s from './input.module.scss'

interface Props {
  id: string,
  name: string,
  type?: string,
  value: string | number,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  required?: boolean
}

export const Input: React.FC<Props> = ({id, name, type = 'text', value, onChange, required = false}): ReactElement => {
  return (
    <input className={s.input} id={id} name={name} type={type} value={value} onChange={onChange} required={required}/>
  )
}
