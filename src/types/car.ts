export interface ICarResponse {
  categories: string[],
  description: string,
  ean: string,
  id: number,
  image: string,
  images: {
    description: string,
    title: string,
    url: string
  }
  name: string,
  net_price: number,
  price: string,
  tags: string[],
  taxes: string,
  upc: string,
}