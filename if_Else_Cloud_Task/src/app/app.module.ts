import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { TopDataCardsComponent } from './top-data-cards/top-data-cards.component';
import { NewUsersComponent } from './new-users/new-users.component';
import { RecentOrdersComponent } from './recent-orders/recent-orders.component';
import { LineGraphComponent } from './line-graph/line-graph.component';
import { ColumnGraphComponent } from './column-graph/column-graph.component';
import { PieChartGraphComponent } from './pie-chart-graph/pie-chart-graph.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LeftNavigationComponent,
    TopNavigationComponent,
    TopDataCardsComponent,
    NewUsersComponent,
    RecentOrdersComponent,
    LineGraphComponent,
    ColumnGraphComponent,
    PieChartGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    NgApexchartsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
