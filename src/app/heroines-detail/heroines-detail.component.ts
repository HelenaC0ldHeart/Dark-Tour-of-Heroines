import { Component, OnInit, Input } from '@angular/core';
import { Heroines } from '../heroines';
import { HeroinesComponent } from '../heroines/heroines.component';
import { HEROINES } from '../mock-heroines';

@Component({
  selector: 'app-heroines-detail',
  templateUrl: './heroines-detail.component.html',
  styleUrls: ['./heroines-detail.component.css']
})
export class HeroinesDetailComponent implements OnInit {


@Input() hero: Heroines;

  constructor() { }

  ngOnInit(): void {
  }

}
