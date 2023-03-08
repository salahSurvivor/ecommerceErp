import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Losses } from 'src/app/losses';

@Component({
  selector: 'app-show-losses',
  templateUrl: './show-losses.component.html',
  styleUrls: ['./show-losses.component.css']
})
export class ShowLossesComponent implements OnChanges {
  losses: Losses[] = [];

  @Input() ls: string;
  @Output() dltL = new EventEmitter();

  p: number = 1;
  count: number = 5;
  id: number;

  price: number;

  constructor(private mainService: MainService){}

  ngOnInit(): void{
    this.mainService.getLosses().subscribe((losses) => {
      this.losses = losses;
      this.losses.sort((a, b) => b.id - a.id)
    });
  }

  ngOnChanges(): void{
    if(this.ls == 'clear'){
      this.ngOnInit();
      return;
    }

    this.mainService.getLosses().subscribe((items) => 
      this.losses = items.filter((i) => i.date == this.ls)
    )
  }

  deleteLosses(){
    this.mainService.deleteLosses(this.id).subscribe(() => 
      this.losses = this.losses.filter((value) => value.id !== this.id)
    );
    this.dltL.emit();
  }

  getId(nb, price){
    this.price = price;
    this.id = nb;
  }
}
