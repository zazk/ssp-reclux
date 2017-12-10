import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// JQuery Works!
declare var $: any;
// --------
@Component({
  selector: 'app-login',
  encapsulation: ViewEncapsulation.None,
  template: `

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
                        <a href="#">
                        <img src="./assets/Resources/img/logo_login.png" 
                        alt="" style="height: 58px; width: 300px; padding: 10px;">
                        </a>
                    </div>
                    <div id="slideshow">
                        <div class="one">
                          <img alt="" src="./assets/Resources/img/img_fondo_SSP.jpg" style="margin: -1px; width: 326px;">
                        </div>
                    </div>
                </div>
                <!-- LOGIN FORM -->
                <div class="user">
                    <!-- ACTIONS
                    -->
                    <div class="form-wrap">
                        <!-- TABS CONTENT -->
                      <div class="">
                            <!-- TABS CONTENT LOGIN -->
                        <div id="" class="active">
                          <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="login_wrapper">
                       <div class="animate form login_form">
                          <section class="login_content">
                              <form style="padding-left: 10%;  padding-right: 10%;">
                                <h1>Login</h1>
                                  <div>
                                    <input type="text" class="form-control" placeholder="Correo" required="" />
                                  </div>
                                  <div>
                                    <input type="password" class="form-control" placeholder="Clave" required="" />
                                  </div>
                                  <div>
                                <a href="perfiles.html" type="button" class="btn btn-primary" style="font-size: 12px; font-weight: bold;"> 
                                INGRESAR&nbsp; <i class="fa fa-chevron-right"></i> <i class="fa fa-chevron-right"></i></a>
                                  <br/>
                                  <br/>
                                  </div>
                                  <div class="separator">
                                    <p class="change_link">
                                      <a href="./recuperar-clave" class="to_register"> Olvidaste tu clave? </a>
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
  styleUrls: [
    '../../assets/Resources/vendors/bootstrap/dist/css/bootstrap.min.css',
    '../../assets/Resources/build/css/login.css'
  ]
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
