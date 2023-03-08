import { Injectable } from '@angular/core';
import { Observable,  Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErpsumService {
  private sumPurchases: number = 0;
  private subject = new Subject<any>();

  constructor() {}

  data(nb?: number): void{
    this.sumPurchases = nb;
    this.subject.next(this.sumPurchases);
  }

  applyData(): Observable<any>{
    return this.subject.asObservable();
  }
}
