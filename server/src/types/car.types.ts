export interface CarFiltersDto {
  manufacturer?: string
  model?: string
  fuel?: string
  body?: string
  transmission?: string
  color?: string

  priceStart?: number
  priceEnd?: number

  mileageStart?: number
  mileageEnd?: number

  yearStart?: number
  yearEnd?: number

  isValid?: boolean
  excludeLeasing?: boolean

  sort?: string
  page?: number
  limit?: number
}
