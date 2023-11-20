import { Component, Input, OnInit } from '@angular/core';
import { LocalstorageService } from '../localstorage.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatMenuModule,
    MatSliderModule,
  ],
  standalone: true,
})
export class FilterComponent implements OnInit {
  @Input() makeControl!: FormControl;
  @Input() colorControl!: FormControl;
  @Input() modelControl!: FormControl;
  @Input() priceControl!: FormControl;
  @Input() kmControl!: FormControl;
  @Input() yearControl!: FormControl;
  @Input() minPriceControl!: FormControl;
  @Input() maxPriceControl!: FormControl;
  @Input()
  childRefresh!: () => void;
  localStorageService: LocalstorageService;
  constructor(localStorage: LocalstorageService) {
    this.localStorageService = localStorage;
    this.makeControl = new FormControl(localStorage.make);
    this.colorControl = new FormControl(localStorage.color);
    this.modelControl = new FormControl(localStorage.model);
    this.priceControl = new FormControl(localStorage.price);
    this.kmControl = new FormControl(localStorage.km);
    this.yearControl = new FormControl(localStorage.year);
    this.minPriceControl = new FormControl(localStorage.minPrice);
    this.maxPriceControl = new FormControl(localStorage.maxPrice);
  }

  ngOnInit(): void {
    this.onChanges();
  }

  refresh() {
    console.log('refresh?');
    window.location.reload();
  }

  onChanges(): void {
    this.makeControl.valueChanges.subscribe((change) => {
      this.localStorageService.make = change;
    });

    this.colorControl.valueChanges.subscribe(
      (change) => (this.localStorageService.color = change)
    );

    this.modelControl.valueChanges.subscribe(
      (change) => (this.localStorageService.model = change)
    );

    this.priceControl.valueChanges.subscribe(
      (change) => (this.localStorageService.price = change)
    );

    this.kmControl.valueChanges.subscribe(
      (change) => (this.localStorageService.km = change)
    );

    this.yearControl.valueChanges.subscribe(
      (change) => (this.localStorageService.year = change)
    );

    this.minPriceControl.valueChanges.subscribe(
      (change) => (this.localStorageService.minPrice = change)
    );

    this.maxPriceControl.valueChanges.subscribe(
      (change) => (this.localStorageService.maxPrice = change)
    );
  }
}
