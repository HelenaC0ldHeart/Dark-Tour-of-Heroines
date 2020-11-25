import { Component, OnInit } from '@angular/core';
import { Heroines } from '../heroines';
import {HeroinesService} from '../heroines.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

heroines: Heroines[] = [];

  constructor(private heroinesService: HeroinesService) { }

  ngOnInit(): void {
    this.getHeroines();
  }

  getHeroines(): void {
    this.heroinesService.getHeroines()
    .subscribe(heroines => this.heroines = heroines.slice(1, 5))
  }

}
