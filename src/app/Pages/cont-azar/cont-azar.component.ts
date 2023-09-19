import { Component, OnInit } from '@angular/core';
import {
  IRandomContac,
  Results,
} from 'src/app/Components/models/userrandom.interface';
import { RandomUserService } from 'src/app/services/random-user.service';

@Component({
  selector: 'app-cont-azar',
  templateUrl: './cont-azar.component.html',
  styleUrls: ['./cont-azar.component.scss'],
})
export class ContAzarComponent implements OnInit {
  Contact: IRandomContac | undefined;

  constructor(private serviceran: RandomUserService) {}

   ngOnInit(): void {
    this.serviceran.obtenerRandonUser().subscribe((response: Results) => {
      this.Contact = response.results[0]; //se lo pasariamos al randon contacto
      console.log(this.Contact);
    });
  }

  generarContactAlea() {
    this.serviceran.obtenerRandonUser().subscribe({
      next: (response: Results) => {
        this.Contact = response.results[0]; //se lo pasariamos al randon contacto
        console.log(this.Contact);
      },
      error: (error) => console.error(`error: ${error}`),
      complete: () => console.info('peticion de randomcontact terminada')
    });
  }

  obtenerListaContactos(n: number){
    this.serviceran.obtenerRandonUsersVarios(n).subscribe({
      next: (response: Results) => {
        //se lo pasariamos al randon contacto
        console.log(response);
      },
      error: (error) => console.error(`error: ${error}`),
      complete: () => console.info('peticion de randomcontact terminada')
    });
  }

}
