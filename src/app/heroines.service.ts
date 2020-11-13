import { Injectable } from '@angular/core';

import { Heroines } from './heroines';
import { HeroinesComponent } from './heroines/heroines.component';
import { HEROINES } from './mock-heroines';
import { MessageService } from './message.service';

import { Observable, of } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class HeroinesService {

getHeroines(): Observable<Heroines[]> {
  //TODO: send the message_after_ fething the heroines
  this.messageService.add('HeroinesService: fetched heroines');
  return of(HEROINES);

}


  constructor(private messageService: MessageService) { }
}
