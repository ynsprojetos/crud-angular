import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {


  constructor(private httpClient: HttpClient) { }


  findAll(){
    return [{_id: '1', category: 'Front-end', name: 'Angular'}]
  }
}
