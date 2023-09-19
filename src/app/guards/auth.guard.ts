import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router'; 

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) => {
  // retur true => carga la ruta
  //false => no carga la ruta
  const rout = inject(Router)
  let token = sessionStorage.getItem('token');
  if (token) {
    return true;
    
  }else {
    rout.navigate(['login']);
    return false;
  }
 
};
