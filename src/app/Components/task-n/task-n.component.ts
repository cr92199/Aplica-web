import { Component, Input } from '@angular/core';
import { ITask, LEVELS } from '../models/task.interface';


@Component({
  selector: 'app-task-n',
  templateUrl: './task-n.component.html',
  styleUrls: ['./task-n.component.scss']
})
export class TaskNComponent {
@Input() task:ITask = {
  title: 'string',
  description: 'string',
  complete: true,
  level: LEVELS.INFO
}


}
