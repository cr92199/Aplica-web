import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { IContac } from '../models/contac.interface';
import { IRandomContac } from '../models/userrandom.interface';

@Component({
  selector: 'app-contactos-contenido',
  templateUrl: './contactos-contenido.component.html',
  styleUrls: ['./contactos-contenido.component.scss']
})
export class ContactosContenidoComponent implements OnInit {
  
  id: any | undefined;
  filtro: string ='';
  constacto: IRandomContac| undefined;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    
    
    //vamos a leer los parametros
    this.route.params.subscribe(
      (params:any) => {
        console.log(params)
        if (params.id) {
          this.id = params.id;
        }
        
      }
      );

      //vamos a leer el estado de state el contacto
      if (history.state.conta) {
        this.constacto = history.state.conta
        console.log(this.constacto);
      }else {
        return console.log("no hay estado disponible");
      }

      if (history.state.filtro) {
        this.filtro = history.state.filtro
        console.log(this.filtro);
        
      }
      
      




  };



}


