import React, { ReactElement } from 'react'
import s from './button.module.scss'

interface Props {
  text: string,
  isLink?: boolean
  rounded?: boolean
}

export const Button: React.FC<Props> = ({text, isLink = false}): ReactElement => {
  return (!isLink ? 
    <button className={s.btn}>{ text }</button> :
    <a className={s.btn}>{ text }</a>
  )
}
