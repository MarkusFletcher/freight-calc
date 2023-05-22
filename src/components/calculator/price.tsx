import React, { ReactElement } from 'react'
import s from './calculator.module.scss'

interface Props {
  price: number
}

export const Price: React.FC<Props> = ({price}: Props): ReactElement => {
  const formattedPrice: string = new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(price)
  return (
    <div className={s.price}>
      <div className={s.label}>Итого</div>
      <div className={s.value}>{ formattedPrice }</div>
    </div>
  )
}