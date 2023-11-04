import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.scss']
})
export class NewUsersComponent {

  newUsers: any;
  i:number = 0;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getNewUsers().subscribe(data => {
      this.newUsers = data.new_users;
    });
  }

  onMoreClicked(user: any) {
    // Define the functionality you want to execute when the "More" button is clicked for a specific user
    console.log("More button clicked for user:", user);
    // You can add your desired functionality here
}
}
