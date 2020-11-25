import { Component, OnInit, Input } from '@angular/core';
import { Heroines } from '../heroines';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroinesService } from '../heroines.service';



@Component({
  selector: 'app-heroines-detail',
  templateUrl: './heroines-detail.component.html',
  styleUrls: ['./heroines-detail.component.css']
})
export class HeroinesDetailComponent implements OnInit {
hero: Heroines[];
  heroines: Heroines;

  constructor(
    private route: ActivatedRoute,
    private heroinesService: HeroinesService,
    private location: Location


  ) { }

  ngOnInit(): void {

    this.getHeroines();

  }


  getHeroines(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroinesService.getHero(id)
      .subscribe(heroines => this.heroines = heroines);
  }
  

  goBack(): void {
    this.location.back();
  }



}
