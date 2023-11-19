import { Component } from '@angular/core';
import { LocalstorageService } from '../localstorage.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  imports: [ReactiveFormsModule],
  standalone: true,
})
export class FilterComponent {
  colors: any;
  makeControl: FormControl;
  colorControl: FormControl;

  constructor(localStorage: LocalstorageService) {
    this.colors = [{ color: 'Red' }, { color: 'Black' }];
    this.makeControl = new FormControl(localStorage.make);
    this.colorControl = new FormControl(localStorage.color);
  }
}
