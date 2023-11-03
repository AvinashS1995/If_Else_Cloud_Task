import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrls: ['./recent-orders.component.scss']
})
export class RecentOrdersComponent {

  recentOrders: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getRecentOrders().subscribe(data => {
      this.recentOrders = data.recent_orders;
    });

  }

  getStatusClasses(status: string) {
    switch (status) {
      case 'Paid':
        return 'btn-green';
      case 'Pending':
        return 'btn-grey';
      case 'Failed':
        return 'btn-red';
      default:
        return '';
    }
  }

  formatDate(date: string) {
    return new Date(date).toLocaleDateString();
  }
}
