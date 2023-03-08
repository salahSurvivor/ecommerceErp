import { Component } from '@angular/core';

@Component({
  selector: 'app-home-erp',
  templateUrl: './home-erp.component.html',
  styleUrls: ['./home-erp.component.css']
})
export class HomeErpComponent {
  search: any;
  date: string;
  dt: string;

  clear(): void{
    this.date = null;
    this.dt = 'clear';
  }

  filter(): void{
    this.dt = this.date;
  }
}
