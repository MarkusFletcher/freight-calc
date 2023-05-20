import React, { useEffect, useState, ReactElement } from 'react'
import s from './calculator.module.scss'

import { ITransportationData } from '../../types/transportation'
import { ICar } from '../../types/car'

import { FormField } from '../ui/form-field'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Cars } from './cars'

import { Distance } from '../../service/distance'
import { CarsService } from '../../service/cars'

const formDataDefault: ITransportationData = {
  from: '',
  to: '',
  date: '',
  time: '',
  duration: '',
  movers: 0,
  passengers: 0,
  car: {
    name: '',
    price: -1
  }
}

export const Calculator: React.FC = (): ReactElement => {
  const [formData, setFormData] = useState<ITransportationData>(formDataDefault)
  const [cars, setCars] = useState<ICar[]>([])
  const [distance, setDistance] = useState<number>(0)
  const [price, setPrice] = useState<number>(0)


  /**
   * Обработчик изменения полей формы
   * @param e - Событие изменения значения
   */
  const formInputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const name: string = e.target.name
    const value: string = e.target.value
    setFormData(prev => ({...prev, [name]: value}))
    console.log(formData)
  }

  /**
   * Обработчик выбора автомобиля
   * @param carData - данные выбранного автомобиля
   */
  const chooseCar = (carData: ITransportationData['car']): void => {
    setFormData(prev => ({...prev, car: carData}))
    console.log(formData)
  }

  /**
   * Расчет расстояния при изменении точек "Откуда/Куда"
   */
  useEffect(() => {
    Distance.calculate(formData.from, formData.to).then((distance) => {
      setDistance(distance)
    })
  }, [formData.from, formData.to])

  /**
   * Получение списка автомобилей при отрисовке компонента
   */
  useEffect(() => {
    CarsService.get().then(res => {
      setCars(res)
    })
  }, [])

  return (
    <form className={s.calc} action="">
      <h1>Расчет стоимости перевозки</h1>
      <div className={s.fields}>
        <FormField label='Откуда' forId="from">
          {<Input id="from" name="from" value={formData.from} onChange={formInputHandler}></Input>}
        </FormField>
        <FormField label='Куда' forId="to">
          {<Input id="to" name="to" value={formData.to} onChange={formInputHandler}></Input>}
        </FormField>
        <div className={s.timeFields}>
          <FormField label='Дата' forId="date">
            {<Input id="date" name="date" type='date' value={formData.date} onChange={formInputHandler}></Input>}
          </FormField>
          <FormField label='Время' forId="time">
            {<Input id="time" name="time" type='time' value={formData.time} onChange={formInputHandler}></Input>}
          </FormField>
          <FormField label='Длительнось' forId="duration">
            {<Input id="duration" name="duration" type='time' value={formData.duration} onChange={formInputHandler}></Input>}
          </FormField>
        </div>
        <div className={s.carsField}>
          <Cars cars={cars} chooseCar={chooseCar}></Cars>
        </div>
        <div className={s.personsFields}>
          <FormField label='Грузчики' forId="movers">
            {<Input id="movers" name="movers" type='number' value={formData.movers} onChange={formInputHandler}></Input>}
          </FormField>
          <FormField label='Пассажиры' forId="passengers">
            {<Input id="passengers" name="passengers" type='number' value={formData.passengers} onChange={formInputHandler}></Input>}
          </FormField>
        </div>
      </div>
      <div className={s.price}>
        <span className={s.priceLabel}>Итого</span>
        <span>{ price }</span>
      </div>
      <div className={s.actions}>
        <Button text="Оформить"/>
      </div>
    </form>
  )
}
