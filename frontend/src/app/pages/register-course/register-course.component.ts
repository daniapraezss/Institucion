import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-course',
  templateUrl: './register-course.component.html',
  styleUrls: ['./register-course.component.css']
})
export class RegisterCourseComponent implements OnInit {

  curso : any;
  constructor() {
    this.curso={
      name :'',
      estudiante :'',
      institucion :'',
      materia : '',
      
    }
   }

  ngOnInit(): void {
  }
  registrar(){}
}
