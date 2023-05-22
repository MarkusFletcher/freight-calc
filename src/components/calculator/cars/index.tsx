import React, { useRef, ReactElement, WheelEvent } from 'react'
import s from './cars.module.scss'
import { ICar } from '../../../types/car'
import { Car } from './car'

interface Props {
  cars: ICar[],
  chooseCar: Function
}

export const Cars: React.FC<Props> = ({cars, chooseCar}: Props): ReactElement => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (e: WheelEvent<HTMLDivElement>): void => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) scrollContainer.scrollLeft += e.deltaY
  }

  return (
    <div className={s.cars} ref={scrollContainerRef} onWheel={scroll}>
      { cars.map(car => (
        <Car key={car.id} id={car.id} name={car.name} price={car.price} chooseCar={chooseCar}></Car>
      )) }
    </div>
  )
}
