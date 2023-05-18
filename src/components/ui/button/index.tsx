import React, { ReactElement } from 'react'
import s from './button.module.scss'

interface Props {
  isLink?: boolean
  rounded?: boolean
}

export const Button: React.FC<Props> = ({isLink = false}): ReactElement => {
  return (!isLink ? 
    <button></button> :
    <a></a>
  )
}
