import axios, { AxiosResponse } from 'axios'

import { ICarResponse } from '../types/car'

const BASE_URL: string = 'https://fakerapi.it/api/v1/'

export class Cars {
	static async get(): Promise<ICarResponse[] | undefined> {
    try {
      const cars: AxiosResponse = await axios.get(`${BASE_URL}products?_price_min=20.50&_price_max=1320.99&_taxes=12&_categories_type=uuid`)
		  return cars.data.data
    } catch (err) {
      console.error(err)
      return undefined
    }
	}
}