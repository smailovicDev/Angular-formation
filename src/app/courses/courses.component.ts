import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent  {

  editable = false;
  myFavorit = 'Laravel';

  myImage = "https://images.pexels.com/photos/17679/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500";

  courses = [
    {id: 1, label: 'Angular', like: 0, deslike: 0, active: true},
    {id: 2, label: 'JAVA EE', like: 0, deslike: 0, active: true},
    {id: 3, label: 'Laravel', like: 0, deslike: 0, active: false},
    {id: 1, label: 'Angular', like: 0, deslike: 0, active: true},
  ]


  myCourse = {
    id: this.courses.length + 1,
    label: '',
    like: 0, deslike: 0,
    active: false,
  };



  constructor() { }

  addCourse() {
    this.courses.push(this.myCourse);
    this.myCourse = {
      id: this.courses.length + 1,
      label: '',
      like: 0, deslike: 0,
      active: false
    };
  }

  DeleteCourse(index: number) {
   this.courses.splice(index, 1);
  }

  editCourse(course: { id: number, label: string, like: 0, deslike: 0, active: boolean }) {
    this.myCourse = course;
    this.editable = true;
  }

  updateCourse() {
    this.editable = false;
    this.myCourse = {
      id: this.courses.length + 1,
      label: '',
      like: 0, deslike: 0,
      active: false
    };
  }

  activeCourse(course: { active: boolean; }) {
    course.active = !course.active;
  }

  updateVotes(course: { deslike: any, like: any }, event: { data: any, type: any }) {
   if (event.type) {
     course.deslike = event.data ;
   } else {
    course.like = event.data ;
   }

  }

}
