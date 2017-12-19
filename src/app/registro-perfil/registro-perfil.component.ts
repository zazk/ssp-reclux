import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// JQuery Works!
declare var $: any;
// --------
@Component({
  selector: 'app-registro-perfil',
  templateUrl: './registro-perfil.component.html',
  styleUrls: [
    '../../assets/Resources/materialize/css/materialize.min.css',
    '../../assets/Resources/materialize/css/fonts.css',
    '../../assets/Resources/vendors/DataTables-1.10.16/css/datatables.css',
    '../../assets/Resources/vendors/DataTables-1.10.16/plugin/Responsive-2.2.0/css/responsive.dataTables.min.css',
    '../../assets/Resources/vendors/DataTables-1.10.16/css/dataTables.bootstrap4.min.css',
    '../../assets/Bloque/reg_perfil/reg_perfil.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class RegistroPerfilComponent implements OnInit {

  private tbl_funciones: any;
  private tbl_idiomas: any;

  constructor() { }

  ngOnInit() {
    $('.button-collapse').sideNav();

    this.tableFunciones();
    this.addFuncion();
    this.updateFuncion();
    //this.inputAutocomplete();
  }

  tableFunciones() {

    this.tbl_funciones = $("#tbl_funciones").DataTable({
      autoWidth: false,
      searching: false,
      ordering: false,
      lengthMenu: [[5], [5]],
      language: {
        "lengthMenu": "",
        "zeroRecords": "No hay registros",
        "info": "",
        "infoEmpty": "Mostrando _PAGES_ fila(s)",
        "infoFiltered": "(filtered from _MAX_ total records)"
      }
    });

    $('#tbl_funciones tbody').on('click', '.remov', function () {
      this.tbl_funciones.row($(this).parents('tr')).remove().draw();
    });

    $('#tbl_funciones tbody').on('click', '.edit', function () {
      var row = $(this).parents('tr');
      var das = this.tbl_funciones.cell(row, 0).data();
      var fc = this.tbl_funciones.cell(row, 1).data();
      var ce = this.tbl_funciones.cell(row, 2).data();
      var com = this.tbl_funciones.cell(row, 3).data();

      $("#descripcion_funcion_up").val(das);
      $("#fc_funcion_up").val(fc);
      $("#ce_funcio_up").val(ce);
      $("#com_funcion_up").val(com);

      $('#modal_up').modal('open');

      $('#row_update').val(row.index());
    });
  }

  addFuncion() {
    $('#modal_up').modal({ opacity: 0 });

    $('#mod_funcion').on('click', function () {
      $('#modal').modal({ opacity: 0 });
      $('#modal').modal('open');
    });

    $('#funcion_add').on('click', function () {

      var des = $("#descripcion_funcion").val();

      if (des.length > 3) {
        var fc = $("#fc_funcion").val();
        var ce = $("#ce_funcion").val();
        var com = $("#com_funcion").val();
        var total = (parseInt(fc) + parseInt(ce) + parseInt(com)) / 3;

        var edit2 = "<a href='javascript:;' class='waves-effect edit'><i class='fa fa-pencil-square-o' style='color: #03a9f4; font-size: 20px;'></i></a>";
        var remov2 = "<a href='javascript:;' class='waves-effect remov'><i class='fa fa-times-circle' style='color: red; font-size: 20px;'></i></a>";

        this.tbl_funciones.row.add([des, fc, ce, com, Math.round(total), edit2 + remov2]).draw(false);
        $('#modal').modal('close');

        $("#descripcion_funcion").val(null);
        $("#fc_funcion").val(1);
        $("#ce_funcion").val(1);
        $("#com_funcion").val(1);
      }
      else {
        alert("La descripcion debe tener minimo 5 digitos");
      }
    });
  }

  updateFuncion() {
    $('#funcion_update').on('click', function () {

      var des = $("#descripcion_funcion_up").val();

      if (des.length > 3) {
        var row = $("#row_update").val();
        var fc = $("#fc_funcion_up").val();
        var ce = $("#ce_funcio_up").val();
        var com = $("#com_funcion_up").val();
        var total = (parseInt(fc) + parseInt(ce) + parseInt(com)) / 3;

        this.tbl_funciones.cell(row, 0).data(des);
        this.tbl_funciones.cell(row, 1).data(fc);
        this.tbl_funciones.cell(row, 2).data(ce);
        this.tbl_funciones.cell(row, 3).data(com);
        this.tbl_funciones.cell(row, 4).data(Math.round(total));

        $('#modal_up').modal('close');

        $("#descripcion_funcion_up").val(null);
        $("#fc_funcion_up").val(1);
        $("#ce_funcio_up").val(1);
        $("#com_funcion_up").val(1);
      }
      else {
        alert("La descripcion debe tener minimo 5 digitos");
      }
    });
  }

  tableIdiomas() {
    this.tbl_idiomas = $("#tbl_funciones").DataTable({
      autoWidth: false,
      searching: false,
      ordering: false,
      lengthMenu: [[5], [5]],
      language: {
        "lengthMenu": "",
        "zeroRecords": "No hay registros",
        "info": "",
        "infoEmpty": "Mostrando _PAGES_ fila(s)",
        "infoFiltered": "(filtered from _MAX_ total records)"
      }
    });
  }

  inputAutocomplete() {
    $('.chips-autocomplete').material_chip({
      autocompleteOptions: {
        data: {
          'Administracion': null,
          'Ingeneria Economia': null,
          'Ingeneria Industrial': null,
          'Ingeneria Sistemas': null
        },
        limit: Infinity,
        minLength: 1
      }
    });
  }

}
