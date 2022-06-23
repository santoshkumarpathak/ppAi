import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewfuctionComponent } from './newfuction/newfuction.component'
const routes: Routes = [
  {
    path: "home", component: HomeComponent, data: { breadcrumb: 'Users' },
  },
  {
    path: '**', redirectTo: 'home'
  }, {
    path: "newfunction", component: NewfuctionComponent, data: { breadcrumb: 'Users' },
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
