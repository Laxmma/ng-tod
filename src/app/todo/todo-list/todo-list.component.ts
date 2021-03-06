import { Component, OnInit } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: any[] = [];

  constructor() { }

  ngOnInit() {
  
        this.todos = [{"id":1,"title":"Pay power bill","isCompleted":false,"targetDate":"2018-5-5","tags":"Important,Urgent","category":"Personal"},{"id":2,"title":"Submit timesheet","isCompleted":true,"targetDate":"2018-04-12","tags":"Urgent","category":"Work"},{"id":3,"title":"Send documents","isCompleted":false,"targetDate":"2018-04-13","tags":"Urgent","category":"Personal"},{"id":4,"title":"Attend apartment meeting","isCompleted":true,"targetDate":"2018-4-14","tags":"Important","category":"Social"},{"id":5,"title":"Pay phone bill","isCompleted":true,"targetDate":"2018-4-15","tags":"Urgent","category":"Bill Payments"},{"id":6,"title":"old test todo","category":"Home","tags":"Important","isCompleted":false,"targetDate":"2018-4-16"},{"id":7,"title":"new test todooooo","category":"Work","tags":"Important","isCompleted":true,"targetDate":"2018-4-8"}];
    
        console.log(this.todos);
  
  }

}
