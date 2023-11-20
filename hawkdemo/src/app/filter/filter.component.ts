import { Component, Input } from '@angular/core';
import { LocalstorageService } from '../localstorage.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

export interface Filter {
  make: string;
  color: string;
  model: string;
  price: number;
  km: number;
  year: number;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  imports: [ReactiveFormsModule],
  standalone: true,
})
export class FilterComponent {
  @Input() makeControl!: FormControl;
  @Input() colorControl!: FormControl;
  @Input() modelControl!: FormControl;
  @Input() priceControl!: FormControl;
  @Input() kmControl!: FormControl;
  @Input() yearControl!: FormControl;

  localStorageService: LocalstorageService;
  carsString: string = '';
  constructor(localStorage: LocalstorageService) {
    this.localStorageService = localStorage;
    console.log(this.localStorageService);
    this.carsString = JSON.stringify(this.localStorageService.color);
    this.makeControl = new FormControl(localStorage.make);
    this.colorControl = new FormControl(localStorage.color);
    this.modelControl = new FormControl(localStorage.model);
    this.priceControl = new FormControl(localStorage.price);
    this.kmControl = new FormControl(localStorage.km);
    this.yearControl = new FormControl(localStorage.year);
  }
}
