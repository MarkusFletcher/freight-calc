import { ITransportationCalculationData } from '../types/transportation'

const COST_PER_LOADER: number   = 400
const COST_PER_PASENGER: number = 100
const RUSH_FEE_TODAY: number    = 1500

export class Transportation {
  distance: number
  dateStart: Date
  dateEnd: Date
  duration: string
  carPrice: number
  numberOfLoaders: number
  numberOfPassengers: number
  private rushFee: number = 0

  constructor(data: ITransportationCalculationData) {
    this.distance = data.distance / 1000
    this.duration = data.duration
    this.dateStart = this.getDateStart(data.date, data.time)
    this.dateEnd = this.getDateEnd()
    this.carPrice = data.carPrice
    this.numberOfLoaders = data.numberOfLoaders
    this.numberOfPassengers = data.numberOfPassengers
    if (this.isToday) {
      this.rushFee = RUSH_FEE_TODAY
    }
  }

  calculatePrice(): number {
    let price: number = 
      this.rushFee
      + this.distance * this.carPrice
      + this.durationInMinutes / 60 * this.carPrice
      + this.numberOfLoaders * COST_PER_LOADER
      + this.numberOfPassengers * COST_PER_PASENGER
    return price
  }

  /**
   * Принимает дату и время начала аренды
   * и возвращает дату как объект Date
   * @param {string} date Дата начала аренды
   * @param {string} time Время начала аренды в формате 'xx:xx'
   * @returns {Date} Дата и время начала аренды
   */
  private getDateStart(date: string, time: string): Date {
    const [year, month, day]: number[] = date.split('-').map(el => Number(el))
    const [hours, minutes]: number[] = time.split(':').map(el => Number(el))

    if (isNaN(year) || isNaN(month) || isNaN(day) || isNaN(hours) || isNaN(minutes)) {
      throw new Error('Неверный формат данных')
    }

    return new Date(year, month, day, hours, minutes)
  }

  /**
   * Принимает длительность аренды
   * и возвращает дату окончания как объект Date
   * @param {string} duration длительность аренды в формате 'xx:xx'
   * @returns {Date} Дата и время окончания перевозки
   */
  private getDateEnd(): Date {
    const minuteStart: number = this.dateStart.getMinutes()
    const dateEnd: Date = new Date(this.dateStart)
    dateEnd.setMinutes(minuteStart + this.durationInMinutes)

    return dateEnd
  }

  get durationInMinutes(): number {
    const [hours, minutes]: number[] = this.duration.split(':').map(el => Number(el))
    if (isNaN(hours) || isNaN(minutes)) {
      return 0
    }
    return 60 * hours + minutes
  }

  get isToday(): boolean {
    const today: Date = new Date
    return (
      today.getFullYear() === this.dateStart.getFullYear()
      && today.getMonth() === this.dateStart.getMonth()
      && today.getDay() === this.dateStart.getDay()
    )
  }

  log(): void {
    console.log(this)
  }
}