import { Injectable } from '@angular/core';
import { IContac } from '../Components/models/contac.interface';
import { listaContact } from '../mocks/contacts.moks';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
   listaContact: IContac[] = listaContact
  constructor() { }

  obtenerContactos(sexo?: string): Promise<IContac[]> {
    if (sexo == 'hombre' || sexo == 'mujer') {
      let listaFiltrada: IContac[] =  this.listaContact.filter(contact => contact.sexo == sexo)
      console.log(listaFiltrada);
      return Promise.resolve(listaFiltrada);

    }else if(sexo == 'todos'){
      return Promise.resolve(this.listaContact);
    
    }else {
      return Promise.reject('filtro no valido');
    }
  }
}
