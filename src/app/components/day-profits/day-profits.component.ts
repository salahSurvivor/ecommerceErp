import { Component } from '@angular/core';
import { formatDate } from '@angular/common';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-day-profits',
  templateUrl: './day-profits.component.html',
  styleUrls: ['./day-profits.component.css']
})
export class DayProfitsComponent{
  currentDate: Date = new Date;
  date = formatDate(this.currentDate, 'yyyy-MM-dd', 'en-US');

  tD: any = [0, 0, 0];
  dayProfith: number = 0;

  constructor(private mainService: MainService){}

  ngOnInit(): void{
    this.mainService.getInfo().subscribe((items) => items.forEach((value) => this.todayProfits(value)));
    this.mainService.getLosses().subscribe((items) => items.forEach((value) => this.todayLosses(value)));

    this.mainService.getInfo().subscribe(() => {
      this.dayProfith =  Number(this.tD[0]) - 
      Number(this.tD[1]) -
      Number(this.tD[2])
    });

  }

  todayProfits(value): void{
    if(value.date == this.date){
      this.tD[0] += Number(value.purchase);
      this.tD[1] += Number(value.sale);
    }   
  }

  todayLosses(value): void{
    if(value.date == this.date){
      this.tD[2] += Number(value.price);
    }
  }    
}
