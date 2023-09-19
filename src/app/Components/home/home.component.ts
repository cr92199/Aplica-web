import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
//import { IContac } from '../models/contac.interface';
import { IRandomContac } from '../models/userrandom.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  token: string | null = null;
  contactoSelecionado: IRandomContac | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    //comprobar si exite el token 
    this.token = sessionStorage.getItem('token');

    //leemos del estado la historia de navegacion que se hizo em contacto
    if (history.state.data) {
      console.log(history.state.data);
      this.contactoSelecionado = history.state.data;
    }
  }

  navegarAContacst() {
    //navegar entre rutas con Router => router.navigate(['ruta'])
    let NavigationExtras: NavigationExtras = {
      queryParams: {
        sexo: 'todos'
      }
    }

    this.router.navigate(['dash/contacto'], NavigationExtras );
  }
}
