import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { ContactPageComponent } from './Components/contact-page/contact-page.component';
import { ContactosContenidoComponent } from './Components/contactos-contenido/contactos-contenido.component';
import { NotfoundPageComponent } from './Components/notfound-page/notfound-page.component';
import { authGuard } from './guards/auth.guard';
import { ContAzarComponent } from './Pages/cont-azar/cont-azar.component';
import { DashComponent } from './Pages/dash/dash.component';
import { TaskComponent } from "./Pages/task/task.component";
import { ListarpelicComponent } from './Pages/listarpelic/listarpelic.component';



const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dash'
  },
  
  {
    path: 'login',
    component: LoginPageComponent
  },
  
  {
    path: 'dash',
    component: DashComponent,
    canActivate: [ authGuard ],
    children: [
      {
        path: '',
        component: HomeComponent,
        canActivate: [ authGuard ],
      },
      {
        path: 'contacto',
        component: ContactPageComponent,
        canActivate: [ authGuard ]
    
      },
      {
        path: 'contacto/:id',
        component: ContactosContenidoComponent,
        canActivate: [ authGuard ]
      },
      {
        path: 'random',
        component: ContAzarComponent,
        canActivate: [ authGuard ]
      },
      {
        path: 'tasks',
        component: TaskComponent ,
        canActivate: [ authGuard ]
      },
      {
        path: 'listMovie',
        component: ListarpelicComponent ,
        canActivate: [ authGuard ]
      },
    ]
  },
  {
    path: '**',
    component: NotfoundPageComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
