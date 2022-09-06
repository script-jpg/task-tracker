import { Component, OnInit } from '@angular/core';

import { Task } from '../../task';
import { mockTasklist } from '../../mock-tasklist';
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

}
