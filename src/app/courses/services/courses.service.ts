import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = '../../../assets/courses.json'

  constructor(private httpClient: HttpClient) { }


  findAll(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      tap(courses => console.log(courses))
    );
  }
}
