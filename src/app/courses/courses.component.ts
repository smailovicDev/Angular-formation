import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent  {
   courses = [
    {id: 1, label: 'Angular'},
    {id: 2, label: 'JAVA EE'},
    {id: 3, label: 'Laravel'},
  ]


  myCourse = {
    id: this.courses.length + 1,
    label: ""
  };

 

  constructor() { }
  
  addCourse() {
    this.courses.push(this.myCourse);
  }

}
