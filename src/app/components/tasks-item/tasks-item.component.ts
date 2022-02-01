import { TASKS } from './../../mock-tasks';
import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {

  @Input() task: Task = TASKS[0];

  constructor() { }

  ngOnInit(): void {
  }

}
