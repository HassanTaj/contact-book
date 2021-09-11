import { ContactAeComponent } from './contact-ae/contact-ae.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: 'contacts',
    component: ContactListComponent,
  },
  {
    path: 'contacts/add',
    component: ContactAeComponent,
  },
  {
    path: 'contacts/edit/:id',
    component: ContactAeComponent,
  },
  // otherwise redirect to home
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
