import { Component } from '@angular/core';
import { formatDate } from '@angular/common';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-month-profits',
  templateUrl: './month-profits.component.html',
  styleUrls: ['./month-profits.component.css']
})
export class MonthProfitsComponent {
  currentDate: Date = new Date;
  month = formatDate(this.currentDate, 'MM', 'en-US');

  /*month Profith start*/
  tM: any = [0, 0, 0];

  monthProfith: any;

  constructor(private mainService: MainService){}

  ngOnInit(): void{
    this.mainService.getInfo().subscribe((items) => items.forEach((value) => this.monthProfits(value)));
    this.mainService.getLosses().subscribe((items) => items.forEach((value) => this.monthLosses(value)));

    this.mainService.getInfo().subscribe(() => {
      this.monthProfith = Number(this.tM[0])
      - Number(this.tM[1]) -Number(this.tM[2])
    })
  }

  monthProfits(value): void{
    if(formatDate(value.date, 'MM', 'en-US') == this.month){
      this.tM[0] += Number(value.purchase);
      this.tM[1] += Number(value.sale);
    }
  }

  monthLosses(value): void{
    if(formatDate(value.date, 'MM', 'en-US') == this.month){
      this.tM[2] += Number(value.price);
    }
  }

}
