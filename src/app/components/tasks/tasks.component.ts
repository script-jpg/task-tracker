import { Component, OnInit } from '@angular/core';

import { Task } from '../../task';
import { mockTasklist } from '../../mock-tasklist';
import { TESTING } from 'src/app/TESTING';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  taskList: Task[] = [];

  constructor() { }

  ngOnInit(): void {
    this.taskList = mockTasklist;
  }

  deleteTask(task: Task) {
    if (TESTING) console.log("delete task called on task with id: "+task.id)

  }

  toggleReminder(task: Task) {
    if (TESTING) console.log("toggle reminder called on task with id:"+task.id)
  }

}
