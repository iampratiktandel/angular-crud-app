import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Mentor } from '../mentor.model';
import { MentorService } from '../mentor.service';

@Component({
  selector: 'app-mentor-list-container',
  templateUrl: './mentor-list-container.component.html',
  styleUrls: ['./mentor-list-container.component.css']
})
export class MentorListContainerComponent implements OnInit {

  // public mentorList$: Observable<Mentor[]>;
  public mentorList!:Mentor[];

  constructor(private mentorService: MentorService) { 
    // this.mentorList$ = this.mentorService.getMentors();
    this.mentorService.getMentors().subscribe((data: Mentor[]) => {
      this.mentorList = data;
    })
  }

  ngOnInit(): void {
  }

  deleteMentor(id: number) {
    this.mentorService.deleteMentor(id).subscribe((data) => {
      console.log(data);
    })
  }
}
