import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorRoutingModule } from './mentor-routing.module';
import { MentorComponent } from './mentor.component';
import { MentorListContainerComponent } from './mentor-list-container/mentor-list-container.component';
import { MentorFormContainerComponent } from './mentor-form-container/mentor-form-container.component';
import { MentorListPresentationComponent } from './mentor-list-container/mentor-list-presentation/mentor-list-presentation.component';
import { MentorFormPresentationComponent } from './mentor-form-container/mentor-form-presentation/mentor-form-presentation.component';
import { MentorService } from './mentor.service';


@NgModule({
  declarations: [MentorComponent, MentorListContainerComponent, MentorFormContainerComponent, MentorListPresentationComponent, MentorFormPresentationComponent],
  imports: [
    CommonModule,
    MentorRoutingModule
  ],
  providers: [
    MentorService
  ]
})
export class MentorModule { }
