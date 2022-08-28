import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mentor, MentorForm } from '../mentor.model';
import { MentorService } from '../mentor.service';

@Component({
  selector: 'app-mentor-form-container',
  templateUrl: './mentor-form-container.component.html',
  styleUrls: ['./mentor-form-container.component.css']
})
export class MentorFormContainerComponent implements OnInit {

  public mentorDetails!: Mentor;
  public mentorId!: string;

  constructor(
    private mentorService: MentorService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(this.activatedRoute);
    this.mentorId = this.activatedRoute.snapshot.params.id;
    if (this.mentorId) {
      this.getMentorById(this.mentorId);
    }
  }

  onAddMentor(data: MentorForm) {
    this.mentorService.addMentor(data).subscribe((data) => {
      this.router.navigate(['mentor','list']);
    });
  }

  onEditMentor(data: MentorForm) {
    this.mentorService.editMentor(data, this.mentorId).subscribe((data) => {
      this.router.navigate(['mentor','list']);
    });
  }

  getMentorById(id: string) {
    this.mentorService.getMentorById(id).subscribe((data: Mentor) => {
      this.mentorDetails = data;
    })
  }
}
