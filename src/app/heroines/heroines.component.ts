import { Component, OnInit } from '@angular/core';
import { Heroines } from '../heroines';
import { HEROINES } from '../mock-heroines';
import { HeroinesService } from '../heroines.service'; 


@Component({
  selector: 'app-heroines',
  templateUrl: './heroines.component.html',
  styleUrls: ['./heroines.component.css']

})
export class HeroinesComponent implements OnInit {
/* DEAD CODE
  heroines = HEROINES;

  selectedHero: Heroines;
  onSelect(heroines: Heroines): void {
    this.selectedHero = heroines;
  };
*/

/*DEAD CODE 2
  heroine = "Windstorm";

  hero: Heroines = {
    id: 1,
    name: 'Windstorm'
  };
*/
  heroines: Heroines[];
  
  
 getHeroines(): void {
   this.HeroinesService.getHeroines()
        .subscribe(heroines => this.heroines = heroines);
 }

  constructor(private HeroinesService: HeroinesService) { 

  }

  ngOnInit(): void {
    this.getHeroines();

  }

}
