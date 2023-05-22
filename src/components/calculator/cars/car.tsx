import React, { ReactElement } from 'react'
import s from './cars.module.scss'

interface Props {
  id: number,
  name: string,
  price: string,
  chooseCar: Function
}

export const Car: React.FC<Props> = ({id, name, price, chooseCar}: Props): ReactElement => {
  const onChange = () => {
    chooseCar({
      name,
      price
    })
  }

  return (
    <label className={s.car}>
      <div className={s.name}>{ name }</div>
      <input type="radio" name="car" id={id.toString()} onChange={onChange}/>
      <div className={s.price}>{ price } ₽/км</div>
    </label>
  )
}