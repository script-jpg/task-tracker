import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../../task';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() task: Task;

  constructor() { }

  ngOnInit(): void {
  }

}
