import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PanelComponent } from './panel/panel.component';
import { LoginExternalComponent } from './login-external/login-external.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ConvocatoriasComponent } from './convocatorias/convocatorias.component';
import { RegistroPerfilComponent } from './registro-perfil/registro-perfil.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  { path: 'login-external', component: LoginExternalComponent },
  { path: 'recuperar-clave', component: RecuperarClaveComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin/usuarios', component: UsuariosComponent },
  { path: 'admin/registro-perfiles', component: RegistroPerfilComponent },
  { path: 'admin/convocatorias', component: ConvocatoriasComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PanelComponent,
    LoginExternalComponent,
    RecuperarClaveComponent,
    UsuariosComponent,
    ConvocatoriasComponent,
    RegistroPerfilComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
