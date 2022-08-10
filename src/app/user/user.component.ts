import { Component, OnInit } from '@angular/core';

import { IStudent } from '../model/istudent';
import { Subject } from './../model/subject';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user_list!:IStudent[];
  user:IStudent ={name:'Dara',subject:'Angular'}
  // [{ name: 'SeavPinh', subject: 'Spring' },
  // { name: 'SingChheng', subject: 'Blockchain' },
  // { name: 'Choumy', subject: 'Data Analytics' },
  // { name: 'Kimhab', subject: 'Big Data' }
  // ]

  subject  = new Subject();



  today= new Date();
  constructor() { }

  ngOnInit(): void {
    this.user_list=[{ name: 'SeavPinh', subject: 'Spring' },
    { name: 'SingChheng', subject: 'Blockchain' },
    { name: 'Choumy', subject: 'Data Analytics' },
    { name: 'Kimhab', subject: 'Big Data' }
    ]
  }

}
