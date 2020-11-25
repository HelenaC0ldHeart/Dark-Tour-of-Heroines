import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroinesComponent } from './heroines/heroines.component';
import { HeroinesDetailComponent } from './heroines-detail/heroines-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'heroines', component: HeroinesComponent},
  {path: 'detail/i:d', component: HeroinesDetailComponent}

]; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
