import React, { ReactElement } from 'react'
import s from './textarea.module.scss'

interface Props {
  id: string,
  name: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
  required?: boolean
}

export const Textarea: React.FC<Props> = ({id, name, value, onChange, required = false}): ReactElement => {
  return (
    <textarea className={s.textarea} id={id} name={name} value={value} onChange={onChange} required={required}/>
  )
}
