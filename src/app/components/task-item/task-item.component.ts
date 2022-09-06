import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../../task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  faTimes = faTimes;
  @Input() task: Task;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleReminder(task: Task) {
    console.log("onToggleReminder: task.reminder = " + task.reminder);
  }

  onDelete(task: Task) {
    console.log("onDelete: task.id = " + task.id);
  }



}
