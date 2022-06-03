import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionComponent } from './session/session.component';

const routes: Routes = [
  {    
    path: 'session/:id/:sessionKey', component: SessionComponent
  },
  {
    path: 'session/:id', component: SessionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
