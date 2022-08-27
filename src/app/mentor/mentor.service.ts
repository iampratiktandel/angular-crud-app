import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mentor } from './mentor.model';

@Injectable()
export class MentorService {

  public url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getMentors(): Observable<Mentor[]> {
    return this.http.get<Mentor[]>(`${this.url}/mentor`);
  }

  deleteMentor(id: number): Observable<any> {
    console.log('delete mentor');
    return this.http.delete(`${this.url}/mentor/${id}`)
  }
}
