import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.component.html',
  styleUrls: ['./register-teacher.component.css']
})
export class RegisterTeacherComponent implements OnInit {
  profesor : any;
  constructor() {

    this.profesor = {
      nombres :'',
      email :'',
      password :'',
  
      }
  
   }

  
  ngOnInit(): void {
  }

  registrar(){}
}
