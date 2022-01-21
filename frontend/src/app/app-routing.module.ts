import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardManagerComponent } from "./dashboard-manager/dashboard-manager.component";

const routes: Routes = [
  { path: 'dashboard-manager', component: DashboardManagerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
