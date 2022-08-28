import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mentor, MentorForm } from './mentor.model';

@Injectable()
export class MentorService {

  public url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getMentors(): Observable<Mentor[]> {
    return this.http.get<Mentor[]>(`${this.url}/mentor`);
  }

  getMentorById(id: number): Observable<Mentor[]> {
    return this.http.get<Mentor[]>(`${this.url}/mentor/${id}`);
  }

  deleteMentor(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/mentor/${id}`)
  }

  addMentor(data: MentorForm): Observable<any> {
    return this.http.post<any>(`${this.url}/mentor`, data);
  }

  editMentor(data: MentorForm, id: number): Observable<any> {
    return this.http.put<any>(`${this.url}/mentor/${id}`, data);
  }

}
