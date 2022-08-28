import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MentorFormContainerComponent } from './mentor-form-container/mentor-form-container.component';
import { MentorListContainerComponent } from './mentor-list-container/mentor-list-container.component';
import { MentorComponent } from './mentor.component';

const routes: Routes = [
  {
    path: 'list',
    component: MentorListContainerComponent
  },
  {
    path: 'add',
    component: MentorFormContainerComponent
  },
  {
    path: 'edit/:id',
    component: MentorFormContainerComponent
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorRoutingModule { }
