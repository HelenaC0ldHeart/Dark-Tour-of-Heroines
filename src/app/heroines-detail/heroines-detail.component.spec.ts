import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroinesDetailComponent } from './heroines-detail.component';

describe('HeroinesDetailComponent', () => {
  let component: HeroinesDetailComponent;
  let fixture: ComponentFixture<HeroinesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroinesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroinesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
