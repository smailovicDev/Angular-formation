import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent  {
  
  editable = false;

  myImage = "https://images.pexels.com/photos/17679/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"; 
  
  courses = [
    {id: 1, label: 'Angular', active: true},
    {id: 2, label: 'JAVA EE', active: true},
    {id: 3, label: 'Laravel', active: false},
    {id: 1, label: 'Angular', active: true},
  ]


  myCourse = {
    id: this.courses.length + 1,
    label: "",
    active: false
  };

 

  constructor() { }
  
  addCourse() {
    this.courses.push(this.myCourse);
    this.myCourse = {
      id: this.courses.length + 1,
      label: "",
      active: false
    };
  }

  DeleteCourse(index) {
   this.courses.splice(index, 1);
  }

  editCourse(course) {
    this.myCourse = course
    this.editable = true;
  }

  updateCourse() {
    this.editable = false;
    this.myCourse = {
      id: this.courses.length + 1,
      label: "",
      active: false
    };
  }

  activeCourse(course) {
    course.active = !course.active
  }

}
