import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Pcinfo } from 'src/app/pcinfo';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-show-erp',
  templateUrl: './show-erp.component.html',
  styleUrls: ['./show-erp.component.css']
})
export class ShowErpComponent implements OnChanges{
  p: number = 1;
  count: number = 6;
  id: number;
  successShow: boolean = false;
  nameEdit: string;
  cityEdit: string;
  dateEdit: string;
  phoneEdit: string;
  purchaseEdit: number;
  saleEdit: number;
  items: Pcinfo[] = [];
  filters: Pcinfo[] = [];
  @Input() search: any;
  @Input() dt: string;  

  constructor(private mainService: MainService){}

  ngOnInit(): void{
   this.mainService.getInfo().subscribe((items) => {
      this.items = items;
      this.items.sort((a, b) => b.id - a.id);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const srch = changes['search'];
    const filter = changes['dt'];
    if(this.dt == 'clear'){
      this.ngOnInit();
      return;
    }
    if(filter)
      this.mainService.getInfo().subscribe((items) => this.items = items.filter((i) => i.date == this.dt))
    if(srch){
      this.mainService.getInfo().subscribe((items) => {
          this.items = items.filter((i) => i.phone.includes(this.search))
          this.items.sort((a, b) => b.id - a.id)
        }
      )
    }
  }

  updateInfo(): void{
    const data = {
      name: this.nameEdit,
      city: this.cityEdit,
      date: this.dateEdit,
      phone: this.phoneEdit,
      purchase: this.purchaseEdit,
      sale: this.saleEdit,
    };

    this.mainService.updatePurchase(data, this.id).subscribe(() => {
        this.ngOnInit();
    });

    this.successShow = true;
  }

  toggleSuccess(): void{
    this.successShow = !this.successShow;
  }

  getId(nb): void{
    this.id = nb; 
    this.mainService.getInfo().subscribe((data) => 
      {
        this.filters = data.filter((d) => d.id == nb);
        this.filters.map((d) => {
            this.nameEdit = d.name;
            this.cityEdit = d.city;
            this.dateEdit = d.date;
            this.phoneEdit = d.phone;
            this.purchaseEdit = d.purchase;
            this.saleEdit = d.sale;
        })
      }
    );
  }

}
