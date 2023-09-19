import { Component, Input, OnInit } from '@angular/core';
import { IRandomContac, Results } from 'src/app/Components/models/userrandom.interface';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.scss'],
})
export class RandomUserComponent implements OnInit {
  
  @Input() randContacts: IRandomContac | undefined;

  constructor() {}

  ngOnInit(): void {
   
  }
}
