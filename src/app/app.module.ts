import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ErpComponent } from './components/erp/erp.component';
import { ShowErpComponent } from './components/show-erp/show-erp.component';
import { AddInfoComponent } from './components/add-info/add-info.component';
import { AddLossesComponent } from './components/add-losses/add-losses.component';
import { AddPurchasesComponent } from './components/add-purchases/add-purchases.component';
import { LossesPurchasesComponent } from './components/losses-purchases/losses-purchases.component';
import { TotalProfitsComponent } from './components/total-profits/total-profits.component';
import { DayProfitsComponent } from './components/day-profits/day-profits.component';
import { MonthProfitsComponent } from './components/month-profits/month-profits.component';
import { ShowLossesComponent } from './components/show-losses/show-losses.component';
import { ShowPurchasesComponent } from './components/show-purchases/show-purchases.component';
import { HomeErpComponent } from './components/home-erp/home-erp.component';

const appRoutes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
  },
  {
    path: 'addErp',
    component: HomeErpComponent
  },
  {
    path: 'erp',
    component: ErpComponent
  },
  {
    path: 'losses-purchasses',
    component: LossesPurchasesComponent
  }
];

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent,
    HomeComponent,
    ErpComponent,
    ShowErpComponent,
    AddInfoComponent,
    AddLossesComponent,
    AddPurchasesComponent,
    LossesPurchasesComponent,
    TotalProfitsComponent,
    DayProfitsComponent,
    MonthProfitsComponent,
    ShowLossesComponent,
    ShowPurchasesComponent,
    HomeErpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
