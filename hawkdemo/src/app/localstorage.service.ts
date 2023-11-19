import { Injectable } from '@angular/core';
import { Filter } from './filter/filter.component';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService implements Filter {
  private _model: string;
  private _price: number;
  private _km: number;
  private _year: number;
  private _make: string;
  private _color: string;

  constructor() {
    this._make = localStorage.getItem('make') as string;
    this._color = localStorage.getItem('color') as string;
    this._model = localStorage.getItem('model') as string;

    const priceTemp = localStorage.getItem('price') as string;
    const kmTemp = localStorage.getItem('km') as string;
    const yearTemp = localStorage.getItem('year') as string;
    this._price = priceTemp == 'null' ? 999999 : (+priceTemp as number);
    this._km = kmTemp == 'null' ? 999999 : (+kmTemp as number);
    this._year = yearTemp == 'null' ? 2023 : (+yearTemp as number);
  }

  public get make() {
    return this._make;
  }
  public get color() {
    return this._color;
  }

  public get model() {
    return this._model;
  }

  public get price() {
    return this._price;
  }

  public get km() {
    return this._km;
  }

  public get year() {
    return this._year;
  }

  public set make(carMake: string) {
    this._make = carMake;
    localStorage.setItem('make', carMake);
  }
}
export { Filter };
