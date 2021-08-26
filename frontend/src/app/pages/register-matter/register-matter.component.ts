import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-matter',
  templateUrl: './register-matter.component.html',
  styleUrls: ['./register-matter.component.css']
})
export class RegisterMatterComponent implements OnInit {

  materia : any;
  constructor() 
  {
    this.materia ={

      nombre :'',
      docente :'',
      institucion :'',
  

  }
   }

  ngOnInit(): void {
  }

  registrar(){};
}
