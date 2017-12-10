import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// JQuery Works!
declare var $: any;
// --------
@Component({
  selector: 'app-login-external',
  template: `
  	<!-- LOGIN MODULE -->
    <div class="login">
      <div class="wrap">
          <!-- TOGGLE -->
          <div id="toggle-wrap">
              <div id="toggle-terms">
                  <div id="cross">
                      <span></span>
                      <span></span>
                  </div>
              </div>
          </div>
          <!-- TERMS -->
          <!-- SLIDER -->
          <div class="content">
              <div class="logo">
                  <a href="#"><img src="./assets/Resources/img/logo_login.png" 
                  alt="" style="height: 58px; width: 300px; padding: 10px;"></a>
              </div>
              <div id="slideshow">
                  <div class="one">
                    <img alt="" src="./assets/Resources/img/cabeza-Login_externo.png" style="margin: -3px; width: 327px;">
                  </div>
              </div>
          </div>
          <!-- LOGIN FORM -->
          <div class="user">
              <div class="form-wrap">
                <div class="">
                  <div class="active">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                      <div class="login_wrapper">
                 <div class="animate form login_form" id="log">
                  <div class="alert alert-info text-overflow" style="margin-left: 10%; margin-right: 10%;">
                    <p class="text-center" style="font-size: 11px; font-weight: bold;">
                    PROGRAMA NACIONAL CONTRA LA VIOLENCIA FAMILIAR Y SEXUAL</p>
                  </div>
                    <section class="login_content">
                        <form style="padding-left: 10%;	padding-right: 10%;">
                          <h1>Login</h1>
                            <div>
                              <input type="text" class="form-control" placeholder="Correo" required="" />
                            </div>
                            <div>
                              <input type="password" class="form-control" placeholder="Clave" required="" />
                            </div>
                            <div>
                          <a href="postular.html" type="button" class="btn btn-primary" style="font-size: 12px; font-weight: bold;">
                          INGRESAR&nbsp; <i class="fa fa-chevron-right"></i> <i class="fa fa-chevron-right"></i></a>
                            <br/>
                            <br/>
                            </div>
                            <div class="separator">
                            <p class="change_link">
                                <a href="./recuperar-clave" class=""> Olvidaste tu clave? </a>
                              </p>
                              <p class="change_link">Eres nuevo?
                                <a href=" javascript:;" id="reg"> Crear cuenta </a>
                              </p>
                             <div class="clearfix"></div>
                              <br />
                            </div>
                     </form>
                  </section>
              </div>
              <div id="register" class="animate form registration_form" style="display: none;">
                          <section class="login_content">
                            <form style="padding-left: 10%;	padding-right: 10%;">
                              <h1>Registrar</h1>
                              <div>
                                <select class="select2_single form-control" tabindex="-1">
                                        <option selected="selected" disabled> - - Tipo documento - - </option>
                                        <option> DNI </option>
                                        <option> Carnet extranjeria </option>
                                    </select>
                                    <br>
                              </div>
                              <div>
                                <input type="text" class="form-control" placeholder="Nro. documento" required="" />
                              </div>
                              <div>
                                <input type="text" class="form-control" placeholder="Nombres" required="" />
                              </div>
                              <div>
                                <input type="text" class="form-control" placeholder="Apellidos" required="" />
                              </div>
                              <div>
                                <input type="text" class="form-control" placeholder="Correo electronico" required="" />
                              </div>
                              <div>
                                <input type="text" class="form-control" placeholder="Clave" required="" />
                              </div>
                              <div>
                                <a class="btn btn-success" href="postular.html">Registrar</a>
                              </div>
                              <div class="clearfix"></div>
                              <div class="separator">
                                <br>
                                <p class="change_link">Ya eres usuario ?
                                  <a href=" javascript:;" id="login"> Click aqui </a>
                                </p>
                                <div class="clearfix"></div>
                                <br />
                              </div>
                            </form>
                          </section>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  `,
  styles: [],
  styleUrls: [ '../../assets/Resources/build/css/login.css' ],
  encapsulation: ViewEncapsulation.None
})
export class LoginExternalComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $('#reg').click(function() {
      $('#log').hide(300, function() {
        $('#register').show(300);
      });
    });
    console.log('JQUERY', $);

    $('#login').click(function() {
      $('#register').hide(300, function() {
        $('#log').show(300);
      });
    });
  }
}
