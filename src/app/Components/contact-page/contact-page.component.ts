import { Component, OnInit } from '@angular/core';
import { IContac } from '../models/contac.interface';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { RandomUserService } from 'src/app/services/random-user.service';
import { IRandomContac, Results } from '../models/userrandom.interface';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  filtrosexo: string = 'todos';
  //listaContacto: IContac[] = [];
  listarandomContat: IRandomContac[] = [];
  cargando: boolean = true

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    //private contanService: ContactService,
    private RandomUserService: RandomUserService
  ) {}

  ngOnInit(): void {
    //accder a los params de las rutas
   /*  this.route.queryParams.subscribe(paran => {
        console.log(paran); 
    }); */
    //obtenemos los query params
    this.route.queryParams.subscribe((params: any) => {
      console.log('queryparamst', params.sexo);
      if (params.sexo) {
        this.filtrosexo = params.sexo;

        if (params.sexo == 'female' || params.sexo == 'male') {
          //console.log('filtrado por mujer / hombre');
          // *implementacion para obtener lista de contactos random
          this.RandomUserService.obtenerRandonUsersVarios(10, params.sexo).subscribe({
            next: (response: Results) => {
              //*se lo pasariamos al randon contacto

              response.results.forEach((randomcontact: IRandomContac, index) =>
                this.listarandomContat.push(randomcontact)
              );
              console.log(this.listarandomContat);
              
            },
            error: (error) => console.error(`error: ${error}`),
            complete: () => {
              console.info('peticion de randomcontact terminada')
              this.cargando = false;
          },
          });

        } else {
          // *implementacion para obtener lista de contactos random
          this.RandomUserService.obtenerRandonUsersVarios(10).subscribe({
            next: (response: Results) => {
              //se lo pasariamos al randon contacto

              response.results.forEach((randomcontact: IRandomContac, index) =>
                this.listarandomContat.push(randomcontact)
              );
              console.log(this.listarandomContat);
            },
            error: (error) => console.error(`error: ${error}`),
            //*sepiner cargando
            
            complete: () => {
              console.info('peticion de randomcontact terminada')
              this.cargando = false;
            },
          });
        }
      }
      //* obtenemos la lista de contactos

      /* //obtenemos la lista de contactos
         this.contanService.obtenerContactos(this.filtrosexo)
         .then((res) => {  
          //console.log(res)
          this.listaContacto = res
        }).catch((err) => console.log(err))
         .finally(() => console.log("peticion de contactos realizada")) */
    });
  }

  /* //ejemplo de paso de informacion entre componentes a traves del estado

  voverAHome(contacto: IContac) {
    let navegationExtras: NavigationExtras = {
      state: {
        data: contacto,
      },
    };

    this.router.navigate(['/dash'], navegationExtras);
  } */

  //ejemplo de paso de informacion entre componentes a traves del estado

  voverAHome(contacto: IRandomContac) {
    let navegationExtras: NavigationExtras = {
      state: {
        data: contacto,
      },
    };

    this.router.navigate(['/dash'], navegationExtras);
  }

  
}
