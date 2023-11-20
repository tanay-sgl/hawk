export interface Car {
  make: string;
  color: string;
  model: string;
  price: number;
  km: number;
  year: number;
}

export interface Filter {
  // make: string;
  // color: string;
  model: string;
  minPrice: number;
  maxPrice: number;
}

export interface FireStoreQuery {
  property: string;
  operator: string;
  value: string;
}
