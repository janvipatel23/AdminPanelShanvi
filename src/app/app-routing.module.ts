import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component"
import { HomepageComponent} from "./homepage/homepage.component";
import { NavBarComponent} from "./nav-bar/nav-bar.component";
import { AddEventComponent } from './add-event/add-event.component';

const routes: Routes = [
  {path:'homepage',component:HomepageComponent},
  {path: '', component:LoginComponent},
  {path:'nav-bar',component:NavBarComponent},
  {path:'add-event',component:AddEventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
