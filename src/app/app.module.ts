import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

//modulo Material
import { MaterialModule } from './module/material/material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { NotfoundPageComponent } from './Components/notfound-page/notfound-page.component';
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { ContactosContenidoComponent } from './Components/contactos-contenido/contactos-contenido.component';
import { ContactPageComponent } from './Components/contact-page/contact-page.component';
import { LoginFormComponent } from './Components/login-form/login-form.component';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';
import { RandomUserComponent } from './Components/random-user/random-user.component';
import { ContAzarComponent } from './Pages/cont-azar/cont-azar.component';
import { NavComponent } from './Components/nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashComponent } from './Pages/dash/dash.component';
import { TaskComponent } from './Pages/task/task.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { KanbanTasksComponent } from './Components/kanban-tasks/kanban-tasks.component';
import { TaskNComponent } from './Components/task-n/task-n.component';
import { ListarpelicComponent } from './Pages/listarpelic/listarpelic.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundPageComponent,
    LoginPageComponent,
    ContactosContenidoComponent,
    ContactPageComponent,
    LoginFormComponent,
    NombreCompletoPipe,
    RandomUserComponent,
    ContAzarComponent,
    NavComponent,
    DashComponent,
    TaskComponent,
    KanbanTasksComponent,
    TaskNComponent,
    ListarpelicComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    //reactive Form modele = formularios reactivos
    ReactiveFormsModule,
    //todo: todo las importaciones del modulo de material
    MaterialModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    DragDropModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
