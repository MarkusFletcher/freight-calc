export interface ITransportationData {
  from: string,
  to: string,
  date: string,
  time: string,
  duration: string,
  loaders: number,
  passengers: number,
  car: {
    name: string,
    price: number
  }
}

export interface ITransportationCalculationData {
  distance: number,
  date: string,
  time: string,
  duration: string,
  carPrice: number,
  numberOfLoaders: number,
  numberOfPassengers: number
}