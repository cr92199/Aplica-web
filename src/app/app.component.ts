import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Routerclass';

  token: string | null = null;

  constructor(private route: Router) {}

  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
    
  }

 
}

// paso de infomacion entre componentes
// * 1. a traves de @Input @Output
// * 2. a traves de inyeccion de cintructores de componentes @viwchild, @contentchild, @contentchildrend
// * 3. a traves de Servivios ?{Promesas, Observables,etc} => NGRX (gestion del estado de la aplicacion)
// * 4. a traves de parametros entre rutas
