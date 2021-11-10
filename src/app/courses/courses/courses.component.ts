import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses: Course[] = []


  displayedColumns = ['name', 'category'];

  constructor(private courseService: CoursesService) {
    this.courses = courseService.findAll()
  }

  ngOnInit(): void {
  }

}
