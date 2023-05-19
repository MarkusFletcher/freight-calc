import React, { ReactElement } from 'react'
import s from './form-field.module.scss'

interface Props {
  label: string,
  forId: string,
  error?: string,
  children: React.ReactNode
}

export const FormField: React.FC<Props> = ({label, forId, error, children}): ReactElement => {
  return (
    <div className={s.field}>
      <label htmlFor={forId}>
        <span className={s.title}>{label}</span>
        {error && <span className={s.error}>{error}</span>}
      </label>
      {children}
    </div>
  )
}
