import { Component, Input } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-total-profits',
  templateUrl: './total-profits.component.html',
  styleUrls: ['./total-profits.component.css']
})
export class TotalProfitsComponent{
  profitsMoney: any = [0, 0, 0, 0];

  totalProfits: number;
  totalMoney: number;

  constructor(private mainService: MainService){}

  ngOnInit(): void{
    this.mainService.getInfo().subscribe((items) => items.forEach((value) =>  this.profitsMoney[0] += Number(value.purchase)));
    this.mainService.getInfo().subscribe((items) => items.forEach((value) => this.profitsMoney[1] += Number(value.sale)));
    this.mainService.getLosses().subscribe((items) => items.forEach((value) => this.profitsMoney[2] += Number(value.price)));
    this.mainService.getPurchases().subscribe((items) => items.forEach((value) => this.profitsMoney[3] += Number(value.totalP)));

    this.mainService.getInfo().subscribe(() => {
      this.totalProfits = this.profitsMoney[0] - this.profitsMoney[1] - this.profitsMoney[2];
      this.totalMoney = this.profitsMoney[0] - this.profitsMoney[2] - this.profitsMoney[3];
    })
  }

}
