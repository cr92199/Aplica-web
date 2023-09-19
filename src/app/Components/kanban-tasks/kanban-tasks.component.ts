import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { ITask, LEVELS } from '../models/task.interface';
import { Title } from '@angular/platform-browser';
//importamos el modleo de task

@Component({
  selector: 'app-kanban-tasks',
  templateUrl: './kanban-tasks.component.html',
  styleUrls: ['./kanban-tasks.component.scss'],
})
export class KanbanTasksComponent {
  todoTask: ITask[] = [
    {
      title: 'Animaciones',
      description: 'Aprender animacione en angular ',
      complete: false,
      level: LEVELS.INFO,
    },
    {
      title: 'Angular Cli',
      description: 'Aprender angular Cli',
      complete: false,
      level: LEVELS.URGENT,
    },
    {
      title: 'Build Angular',
      description: 'Aprender a desplegar un proyecto final',
      complete: false,
      level: LEVELS.BLOKING,
    },
  ];

  

  doneTask: ITask[] = [
    {
      title: 'Configuracion IDE',
      description: 'Configurar e instalar plugins en Visual Studio Code ',
      complete: true,
      level: LEVELS.BLOKING,
    },
    {
      title: 'Instalar angular',
      description: 'Aprender a instalar angular',
      complete: true,
      level: LEVELS.URGENT,
    },
    {
      title: 'TypeScript',
      description: 'Aprender ts desde angular',
      complete: true,
      level: LEVELS.INFO,
    },
    {
      title: 'JavaScript',
      description: 'Aprender JavaScript desde angular ',
      complete: true,
      level: LEVELS.INFO,
    },
  ];

  drop(event: CdkDragDrop<ITask[]>): void {
    if (event.previousContainer === event.container) {
     
      console.log('misma columna',event.container.data);
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      //actualizacion de valor completed de las tareas
      event.previousContainer.data[event.previousIndex].complete =  !event.previousContainer.data[event.previousIndex].complete 
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
