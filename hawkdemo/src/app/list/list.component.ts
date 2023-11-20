import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import '@angular/compiler';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  standalone: true,
  imports: [MatListModule],
})
export class ListComponent {}
