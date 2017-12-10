import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// JQuery Works!
declare var $: any;
// --------
@Component({
  selector: 'app-usuarios',
  template: `
  	<div style="padding: 1%; height: 100%;">
      <div style="background-color: white; border-radius: 5px; border: 1px solid rgb(201, 201, 201);">
           <nav role="navigation"
           style="background-color: rgb(153, 0, 0); border-top-left-radius: 5px; border-top-right-radius: 5px; height: 55px;">
            <div class="nav-wrapper" style="height: 100%;">
              <a href="#" data-activates="nav-mobile" class="button-collapse"
              style="font-size: 20px; display: block; height: 100%; margin-top: -5px;">
                  <i class="fa fa-bars"></i>
                </a>
                <a href="#" class="brand-logo"><img alt="logo"
                src="./assets/Resources/img/logoUNETE.png" style="width: 45%;  margin-top: -10px;"></a>
                <ul class="right hide-on-med-and-down" style=" margin-top: -5px;">
                  <li><a style="color: white;">Nombre del empleado</a></li>
                </ul>
                <ul id="nav-mobile" class="side-nav grey lighten-2">
                  <li>
                    <ul class="collapsible collapsible-accordion">
                      <li class="bold"><a class="collapsible-header waves-effect waves-teal">
                        <i class="fa fa-home" aria-hidden="true"></i>Inicio</a>
                      </li>
                      <li class="bold">
                        <a class="collapsible-header waves-effect waves-teal">
                          <i class="fa fa-home" aria-hidden="true"></i>Maestras
                        </a>
                          <div class="collapsible-body" style="display: none;">
                              <ul>
                                <li><a href="usuarios.html">Usuarios</a></li>
                                <li><a href="#">Organos</a></li>
                            </ul>
                    </div>
                  </li>
                  <li class="bold"><a class="collapsible-header waves-effect waves-teal">
                    <i class="fa fa-home" aria-hidden="true"></i>Empleados</a>
                  </li>
                        <li class="bold">
                          <a class="collapsible-header waves-effect waves-teal">
                            <i class="fa fa-home" aria-hidden="true"></i>Requisicion de Puesto
                          </a>
                          <div class="collapsible-body" style="display: none;">
                              <ul>
                                  <li><a href="reg_perfil.html">Solicitud</a></li>
                                  <li><a href="#">Aprobaciones</a></li>
                                  <li><a href="listado_perfiles.html">Revisiones</a></li>
                              </ul>
                          </div>
                        </li>
                        <li class="bold">
                          <a href="cronograma.html" class="collapsible-header waves-effect waves-teal">
                          <i class="fa fa-home" aria-hidden="true"></i>Cronograma</a>
                        </li>
                        <li class="bold"><a class="collapsible-header waves-effect waves-teal">
                          <i class="fa fa-home" aria-hidden="true"></i>Convocatorias</a>
                        </li>
                        <li class="bold"><a class="collapsible-header waves-effect waves-teal">
                          <i class="fa fa-home" aria-hidden="true"></i>Candidatos</a>
                        </li>
                        <li class="bold"><a class="collapsible-header waves-effect waves-teal">
                          <i class="fa fa-home" aria-hidden="true"></i>Central de Entrevistas</a>
                        </li>
                      </ul>
                    </li>
                </ul>
          </div>
        </nav>
      <div class="row pad" >
        <div class="col s12">
          <ul class="tabs bul">
            <li class="tab col l6" style="padding-left: 25px; "><a class="active" href="#test-swipe-1">Usuarios</a></li>
              <li class="tab col l6" style="padding-right: 25px;"><a href="#test-swipe-2">Roles</a></li>
          </ul>
        </div>
        <div id="test-swipe-1" class="col s12">
          <div class="col s12" >
            <div class="row pad">
                  <div class="col s12" >
                    <table id="tbl_usuarios" class="display highlight nowrap" cellspacing="0" >
                    <thead>
                        <tr>
                          <th>#</th>
                            <th>Empleado</th>
                            <th>Dependencia</th>
                            <th>Rol</th>
                            <th>Usuario</th>
                            <th class="center-align">Password</th>
                            <th>Estado</th>
                            <th></th>
                          </tr>
                      </thead>
                      <tbody>
                        <tr>
                            <td>1</td>
                            <td>Freddy Enrriquez</td>
                            <td>Administracion</td>
                            <td>RRHH</td>
                            <td>fenriquezc@minp.com</td>
                            <td class="center-align"><a href="#"><i class="fa fa-refresh" aria-hidden="true"></i></a></td>
                            <td>Activo</td>
                            <td class="center-align">
                              <a href="javascript:;"><i class="fa fa-pencil" style="color: olive; font-size: 18px;"></i></a> 
                              <a href="javascript:;"><i class="fa fa-times-circle" style="color: red; font-size: 18px;"></i></a>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>George Soteloz</td>
                            <td>Administracion</td>
                            <td>Reclutador</td>
                            <td>dlrsgeorge@minp.com</td>
                            <td class="center-align"><a href="#"><i class="fa fa-refresh" aria-hidden="true"></i></a></td>
                            <td>Desactivo</td>
                            <td class="center-align">
                              <a href="javascript:;"><i class="fa fa-pencil" style="color: olive; font-size: 18px;"></i></a> 
                              <a href="javascript:;"><i class="fa fa-times-circle" style="color: red; font-size: 18px;"></i></a>
                            </td>
                          </tr>
                      </tbody>
                </table>
                  </div>
                </div>
              </div>
        </div>
        <div id="test-swipe-2" class="col s12">
          <div class="col s12" >
            <div class="row pad">
                  <div class="col s12" >
                    <table id="tbl_perfiles" class="display highlight nowrap" cellspacing="0" >
                    <thead>
                        <tr>
                          <th>#</th>
                            <th>Rol</th>
                            <th>Estado</th>
                            <th></th>
                          </tr>
                      </thead> 
                      <tbody>
                    <tr>
                            <td>1</td>
                            <td>Administrador</td>
                            <td>Activo</td>
                            <td class="center-align">
                              <a href="javascript:;"><i class="fa fa-pencil" style="color: olive; font-size: 18px;"></i></a> 
                              <a href="javascript:;"><i class="fa fa-times-circle" style="color: red; font-size: 18px;"></i></a>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Administrador</td>
                            <td>Desactivo</td>
                            <td class="center-align">
                              <a href="javascript:;"><i class="fa fa-pencil" style="color: olive; font-size: 18px;"></i></a> 
                              <a href="javascript:;"><i class="fa fa-times-circle" style="color: red; font-size: 18px;"></i></a>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Soporte</td>
                            <td>Activo</td>
                            <td class="center-align">
                              <a href="javascript:;"><i class="fa fa-pencil" style="color: olive; font-size: 18px;"></i></a> 
                              <a href="javascript:;"><i class="fa fa-times-circle" style="color: red; font-size: 18px;"></i></a>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Soporte</td>
                            <td>Activo</td>
                            <td class="center-align">
                              <a href="javascript:;"><i class="fa fa-pencil" style="color: olive; font-size: 18px;"></i></a> 
                              <a href="javascript:;"><i class="fa fa-times-circle" style="color: red; font-size: 18px;"></i></a>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Soporte</td>
                            <td>Activo</td>
                            <td class="center-align">
                              <a href="javascript:;"><i class="fa fa-pencil" style="color: olive; font-size: 18px;"></i></a> 
                              <a href="javascript:;"><i class="fa fa-times-circle" style="color: red; font-size: 18px;"></i></a>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Soporte</td>
                            <td>Activo</td>
                            <td class="center-align">
                              <a href="javascript:;"><i class="fa fa-pencil" style="color: olive; font-size: 18px;"></i></a> 
                              <a href="javascript:;"><i class="fa fa-times-circle" style="color: red; font-size: 18px;"></i></a>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Soporte</td>
                            <td>Activo</td>
                            <td class="center-align">
                              <a href="javascript:;"><i class="fa fa-pencil" style="color: olive; font-size: 18px;"></i></a> 
                              <a href="javascript:;"><i class="fa fa-times-circle" style="color: red; font-size: 18px;"></i></a>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Soporte</td>
                            <td>Activo</td>
                            <td class="center-align">
                              <a href="javascript:;"><i class="fa fa-pencil" style="color: olive; font-size: 18px;"></i></a> 
                              <a href="javascript:;"><i class="fa fa-times-circle" style="color: red; font-size: 18px;"></i></a>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Soporte</td>
                            <td>Activo</td>
                            <td class="center-align">
                              <a href="javascript:;"><i class="fa fa-pencil" style="color: olive; font-size: 18px;"></i></a> 
                              <a href="javascript:;"><i class="fa fa-times-circle" style="color: red; font-size: 18px;"></i></a>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Soporte</td>
                            <td>Activo</td>
                            <td class="center-align">
                              <a href="javascript:;"><i class="fa fa-pencil" style="color: olive; font-size: 18px;"></i></a> 
                              <a href="javascript:;"><i class="fa fa-times-circle" style="color: red; font-size: 18px;"></i></a>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Soporte</td>
                            <td>Activo</td>
                            <td class="center-align">
                              <a href="javascript:;"><i class="fa fa-pencil" style="color: olive; font-size: 18px;"></i></a> 
                              <a href="javascript:;"><i class="fa fa-times-circle" style="color: red; font-size: 18px;"></i></a>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Soporte</td>
                            <td>Activo</td>
                            <td class="center-align">
                              <a href="javascript:;"><i class="fa fa-pencil" style="color: olive; font-size: 18px;"></i></a> 
                              <a href="javascript:;"><i class="fa fa-times-circle" style="color: red; font-size: 18px;"></i></a>
                            </td>
                          </tr>
                      </tbody>
                </table>
                  </div>
                </div>
              </div>
        </div>
        <div id="modal" class="modal modal-fixed-footer" style="max-height: 550px;">
            <div class="modal-content">
              <h5>Agregar Rol</h5>
                <hr>
                <div class="row">
                  <div class="input-field col l12 m12 s12">
                <input id="last_name" type="text">
                <label for="last_name">Nombre</label>
              </div>
            </div>
                <div class="row">
              <div class="col l12 m12 s12">
                <table id="tbl_funciones" class="display highlight striped" cellspacing="0" width="100%">
                  <thead>
                    <tr style="font-size: 13px;">
                      <th width="5%"></th>
                      <th>Prigilegios</th>
                      <th width="15%" class="center-align">Listado</th>
                      <th width="15%" class="center-align">Registrar</th>
                      <th width="15%" class="center-align">Modificar</th>
                    </tr>
                  </thead>
                  <tbody style="font-size: 14px;">
                    <tr>
                      <td>1</td>
                      <td>Pagina 1</td>
                      <td class="center-align">
                        <p style="margin: 0;">
                          <input type="checkbox" id="pp1">
                          <label for="pp1"></label>
                        </p>
                      </td>
                      <td class="center-align">
                        <p style="margin: 0;">
                          <input type="checkbox" id="pp2">
                          <label for="pp2"></label>
                        </p>
                      </td>
                      <td class="center-align">
                        <p style="margin: 0;">
                          <input type="checkbox" id="pp3">
                          <label for="pp3"></label>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Pagina 2</td>
                      <td class="center-align">
                        <p style="margin: 0;">
                          <input type="checkbox" id="pp4">
                          <label for="pp4"></label>
                        </p>
                      </td>
                      <td class="center-align">
                        <p style="margin: 0;">
                          <input type="checkbox" id="pp5">
                          <label for="pp5"></label>
                        </p>
                      </td>
                      <td class="center-align">
                        <p style="margin: 0;">
                          <input type="checkbox" id="pp6">
                          <label for="pp6"></label>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Pagina 3</td>
                      <td class="center-align">
                        <p style="margin: 0;">
                          <input type="checkbox" id="pp7">
                          <label for="pp7"></label>
                        </p>
                      </td>
                      <td class="center-align">
                        <p style="margin: 0;">
                          <input type="checkbox" id="pp8">
                          <label for="pp8"></label>
                        </p>
                      </td>
                      <td class="center-align">
                        <p style="margin: 0;">
                          <input type="checkbox" id="pp9">
                          <label for="pp9"></label>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            </div>
            <div class="modal-footer">
              <a id="funcion_add" href="#!" class="waves-effect waves-green btn-flat ">Agregar</a>
            </div>
          </div>
        <div id="modal_user" class="modal modal-fixed-footer" style="max-height: 550px;">
            <div class="modal-content">
              <h5>Agregar Usuario</h5>
                <hr>
                <div class="row" style="padding-top: 10px;">
                  <div class="col s6 m6">
                <label>Empleado</label>
                <select class="browser-default">
                  <option value="" disabled selected>-- Seleccione --</option>
                  <option value="1">Option 1</option>
                </select>
              </div>
              <div class="input-field col l6 m6 s6">
                <input id="last_name" type="text" value="Sistemas" disabled="disabled">
                <label for="last_name">Dependencia</label>
              </div>
            </div>
            <div class="row">
              <hr style="border-top: 1px solid #e0e0e0;">
              <div class="col s4 m4 l4">
                <label>Rol</label>
                <select class="browser-default">
                  <option value="" disabled selected>-- Seleccione --</option>
                  <option value="1">Option 1</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="input-field col l6 m6 s6">
                <input id="last_name" type="text" >
                <label for="last_name">Usuario de logeo</label>
              </div>
              <div class="input-field col l6 m6 s6">
                <input id="last_name" type="text">
                <label for="last_name">Contraseña</label>
              </div>
            </div>
            </div>
            <div class="modal-footer">
              <a id="funcion_add" href="#!" class="waves-effect waves-green btn-flat ">Agregar</a>
            </div>
        </div>
      </div>
        <footer>
          <div class="footer-copyright">
            <div class="container">
            Made by <a class="brown-text text-lighten-3" href="http://materializecss.com">Materialize</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
    <script src="./assets/Bloque/usuarios.js"></script>
  `,
  styles: [],
  styleUrls: [
    '../../assets/Resources/vendors/DataTables-1.10.16/css/datatables.css',
    '../../assets/Resources/vendors/DataTables-1.10.16/plugin/Responsive-2.2.0/css/responsive.dataTables.min.css',
    '../../assets/Resources/materialize/css/materialize.min.css',
    '../../assets/Bloque/usuarios.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class UsuariosComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $('.button-collapse').sideNav();
    $('#includedContent').load('men.html');
    this.tableListadoUsuarios();
    this.tableListadoPerfiles();
  }

  tableListadoPerfiles() {
    const tbl_perfiles = $('#tbl_perfiles').DataTable({
      dom: `<'row'<'col l6 m6 s12'f><'col l6 m6 s12'l>>
        <'row'<'col l6 m6 s12 border-right'tr><'col l6 m6 s12 pag'>>
        <'row'<'col s12 m5'i><'col s12 m7'p>>`,

      searching: true,
      ordering: false,
      scrollY: '39vh',
      columnDefs: [
        { width: '3%', targets: 0 },
        { width: '87%', targets: 1 },
        { width: '10%', targets: 2 }
      ],
      language: {
        sSearch: 'Buscar:',
        lengthMenu: `<a id='mod_funcion' class='left-align waves-effect waves-light btn grey'>Nuevo</a>`,
        zeroRecords: 'No hay registros',
        info: 'Filtrado de un total de _MAX_ registros',
        infoEmpty: 'No se han encontrado registro',
        infoFiltered: ''
      }
    });

    const pags = `<h6 class='center-align' style='color: #606060;'>Permisos Asignados</h6>
      <table id='tbl_pages' class='display highlight nowrap' cellspacing='0' width='100%' >
      <thead>
      <tr>
      <th></th>
      <th>Listar</th>
      <th>Registrar</th>
      <th>Modificar</th>
      <tr>
      </thead>
      <tbody>
      <tr>
      <td>Pagina 1</td>
      <td><p style='margin: 0;'><input type='checkbox' id='hc1' checked='checked' disabled='disabled'><label for='hc1'></label></p></td>
      <td></td>
      <td><p style='margin: 0;'><input type='checkbox' id='hc1' checked='checked' disabled='disabled'><label for='hc1'></label></p></td>
      </tr>
      <tr>
      <td>Pagina 2</td>
      <td><p style='margin: 0;'><input type='checkbox' id='hc1' checked='checked' disabled='disabled'><label for='hc1'></label></p></td>
      <td><p style='margin: 0;'><input type='checkbox' id='hc1' checked='checked' disabled='disabled'><label for='hc1'></label></p></td>
      <td><p style='margin: 0;'><input type='checkbox' id='hc1' checked='checked' disabled='disabled'><label for='hc1'></label></p></td>
      </tr>
      <tr>
      <td>Pagina 3</td>
      <td><p style='margin: 0;'><input type='checkbox' id='hc1' checked='checked' disabled='disabled'><label for='hc1'></label></p></td>
      <td><p style='margin: 0;'><input type='checkbox' id='hc1' checked='checked' disabled='disabled'><label for='hc1'></label></p></td>
      <td></td>
      </tr>
      </tbody>
      </table>`;

    $('.pag').append(pags);

    $('#mod_funcion').on('click', function() {
      $('#modal').modal({ opacity: 0 });
      $('#modal').modal('open');
    });
  }

  tableListadoUsuarios() {
    const tbl_usuarios = $('#tbl_usuarios').DataTable({
      dom: `
        <'row'<'col l6 m6 s12'f><'col l6 m6 s12'l>>
        <'row'<'col l12 m12 s12'tr>>
        <'row'<'col s12 m5'i><'col s12 m7'p>>
        `,

      searching: true,
      ordering: false,
      scrollY: '39vh',
      columnDefs: [
        { width: '3%', targets: 0 },
        { width: '20%', targets: 1 },
        { width: '20%', targets: 2 },
        { width: '10%', targets: 3 },
        { width: '20%', targets: 4 }
      ],
      language: {
        sSearch: 'Buscar:',
        lengthMenu: `<a id='mod_user' class='left-align waves-effect waves-light btn grey'>Nuevo</a>`,
        zeroRecords: 'No hay registros',
        info: 'Filtrado de un total de _MAX_ registros',
        infoEmpty: 'No se han encontrado registro',
        infoFiltered: ''
      }
    });

    $('#mod_user').on('click', function() {
      $('#modal_user').modal({ opacity: 0 });
      $('#modal_user').modal('open');
    });
  }
}
