import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Purchases } from 'src/app/purchases';

@Component({
  selector: 'app-show-purchases',
  templateUrl: './show-purchases.component.html',
  styleUrls: ['./show-purchases.component.css']
})
export class ShowPurchasesComponent {
  purchases: Purchases[] = [];
  id: number;
  @Input() search: string = 'ok';
  @Input() pr: string;
  @Output() dltP = new EventEmitter();

  priceTotal: number;  

  constructor(private mainService: MainService){}

  ngOnInit(): void{
    this.mainService.getPurchases().subscribe((purchases) => {
      this.purchases = purchases;
      this.purchases.sort((a, b) => b.id - a.id)
    });
  } 

  ngOnChanges(): void{
    if(this.pr == 'clear'){
      this.ngOnInit();
      return;
    }

    this.mainService.getPurchases().subscribe((items) => 
      this.purchases = items.filter((i) => i.dateP == this.pr)
    )
  }

  deletePurchase(): void{
    this.mainService.deletePurchase(this.id).subscribe(() => 
      this.purchases = this.purchases.filter((i) => i.id !== this.id)
    );
    this.dltP.emit();
  }

  getId(nb, price): void{
    this.priceTotal = price;
    this.id = nb;
  }
}
