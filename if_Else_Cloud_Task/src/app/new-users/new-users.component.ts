import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.scss']
})
export class NewUsersComponent {

  newUsers: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getNewUsers().subscribe(data => {
      this.newUsers = data.new_users;
    });
  }
}
