import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Mentor } from '../../mentor.model';

@Component({
  selector: 'app-mentor-list-presentation',
  templateUrl: './mentor-list-presentation.component.html',
  styleUrls: ['./mentor-list-presentation.component.css']
})
export class MentorListPresentationComponent implements OnInit {

  @Input() public set mentorList(value: Mentor[] | null) {
    if(value) {
      this._mentorList = value
    }
  }

  public get mentorList(): Mentor[] | null {
    return this._mentorList;
  }
  
  @Output() deleteMentor: EventEmitter<number>;
  private _mentorList: Mentor[] | null;

  constructor() { 
    this._mentorList = [];
    this.deleteMentor = new EventEmitter();
  }
  
  ngOnInit(): void {
  }

  onDelete(id?: number) {
    this.deleteMentor.emit(id);
  }

}
