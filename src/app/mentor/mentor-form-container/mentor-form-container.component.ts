import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MentorForm } from '../mentor.model';
import { MentorService } from '../mentor.service';

@Component({
  selector: 'app-mentor-form-container',
  templateUrl: './mentor-form-container.component.html',
  styleUrls: ['./mentor-form-container.component.css']
})
export class MentorFormContainerComponent implements OnInit {

  constructor(
    private mentorService: MentorService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onAddMentor(data: MentorForm) {
    this.mentorService.addMentor(data).subscribe((data) => {
      this.router.navigate(['mentor','list']);
    });
  }
}
