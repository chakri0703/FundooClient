import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetComponent } from './components/forget/forget.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { AuthGuard } from './components/auth/auth.guard';
import { ResetComponent } from './components/reset/reset.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { TrashComponent } from './components/trash/trash.component';
import { ReminderComponent } from './components/reminder/reminder.component';
import { DashBoardComponent } from './components/dashboard/dashboard.component';
import { GetallnotesComponent } from './components/get-all-notes/get-all-notes.component';
import { LabelComponent } from './components/label/label.component';

const routes: Route[] = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forget', component: ForgetComponent },
  { path: 'reset/:token', component: ResetComponent },
  {
    path: 'dashboard', component: DashBoardComponent,
    // canActivate:[AuthGuard]
    children: [
      
      {path:'',component:GetallnotesComponent},
      { path: 'archive', component: ArchiveComponent },
      { path: 'getAllNotes', component: GetallnotesComponent },
      { path: 'trash', component: TrashComponent },
      {path:'reminders',component:ReminderComponent},
      {path:'label',component:LabelComponent}
    ]
  },


  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
