import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-top-data-cards',
  templateUrl: './top-data-cards.component.html',
  styleUrls: ['./top-data-cards.component.scss']
})
export class TopDataCardsComponent {

  topCards: any;
  iconClasses = ['fa-music', 'fa-chart-pie', 'fa-arrow-down', 'fa-sync-alt'];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getTopCards().subscribe(data => {
      this.topCards = data.top_cards;
    });

    
  }
}
