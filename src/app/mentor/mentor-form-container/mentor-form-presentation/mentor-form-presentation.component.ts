import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MentorForm } from '../../mentor.model';

@Component({
  selector: 'app-mentor-form-presentation',
  templateUrl: './mentor-form-presentation.component.html',
  styleUrls: ['./mentor-form-presentation.component.css']
})
export class MentorFormPresentationComponent implements OnInit {

  @Output() public addMentor: EventEmitter<MentorForm>;

  public mentorForm: FormGroup;
  public isSubmitted: boolean;

  constructor(private fb: FormBuilder) { 
    this.addMentor = new EventEmitter();
    this.mentorForm = this.createForm();
    this.isSubmitted = false;
  }

  ngOnInit(): void {
  }

  createForm() {
    return this.fb.group({
      name: [null, [Validators.required]],
      age: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      email: [null, [Validators.required]],
    })
  }

  onSubmit() {
    if (this.mentorForm.invalid) {
      return;
    }
    this.addMentor.emit(this.mentorForm.value);
  }
}
