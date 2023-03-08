import { Injectable } from '@angular/core';
import { Pcinfo } from '../pcinfo';
import { Purchases } from '../purchases';
import { Losses } from '../losses';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class MainService {
  private apiUrl = 'http://localhost:3000/info/';
  private apiUrlLosses = ' http://localhost:3000/losses/';
  private Url = 'http://localhost:3000/purchases/';

  constructor(private http: HttpClient) { }

  getInfo2(){
    return this.http.get<Pcinfo[]>(this.apiUrl);
  }

  getInfo(): Observable<Pcinfo[]>{
    return this.http.get<Pcinfo[]>(this.apiUrl);
  } 

  getLosses(): Observable<Losses[]>{
    return this.http.get<Losses[]>(this.apiUrlLosses);
  }

  getPurchases(): Observable<Purchases[]>{
    return this.http.get<Purchases[]>(this.Url);
  }

  addInfo(data: Pcinfo): Observable<Pcinfo>{
    return this.http.post<Pcinfo>(this.apiUrl, data);
  }

  addLosses(data: Losses): Observable<Losses>{
    return this.http.post<Losses>(this.apiUrlLosses, data);
  }  

  addPurchases(data: Purchases): Observable<Purchases>{
    return this.http.post<Purchases>(this.Url, data);
  }   

  deleteLosses(nb: number): Observable<Losses>{
    return this.http.delete<Losses>(this.apiUrlLosses+ nb);
  }

  deletePurchase(nb: number): Observable<Purchases>{
    return this.http.delete<Purchases>(this.Url+ nb);
  }

  updatePurchase(pcinfo: Pcinfo, nb): Observable<Pcinfo>{
    return this.http.put<Pcinfo>(this.apiUrl+ nb, pcinfo, httpOptions);
  }
}
