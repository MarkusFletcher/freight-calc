import React, { ReactElement } from 'react'
import s from './select.module.scss'

interface Option {
  key: string | number
  value: string | number,
  name?: string | number
}

interface Props {
  id: string,
  name: string,
  value: string
  options: Option[],
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
}

export const Select: React.FC<Props> = ({id, name, value, options, onChange}): ReactElement => {
  return (
    <select className={s.select} id={id} name={name} value={value} onChange={onChange} required>
      {options.map(option => (
        <option key={option.value} value={option.value}>{option.name || option.value}</option>
      ))}
    </select>
  )
}
