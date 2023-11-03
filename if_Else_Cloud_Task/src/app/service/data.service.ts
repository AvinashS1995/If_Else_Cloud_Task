import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = "https://1.api.fy23ey05.careers.ifelsecloud.com/";

  constructor(private http : HttpClient) { }

  getTopCards() {
    return this.http.get<any>(this.apiUrl);
  }

  getRecentOrders() {
    return this.http.get<any>(this.apiUrl);
  }

  getNewUsers() {
    return this.http.get<any>(this.apiUrl);
  }
}
