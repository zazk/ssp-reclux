import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// JQuery Works!
declare var $: any;
// --------
@Component({
  selector: 'app-convocatorias',
  templateUrl: './convocatorias.component.html',
  styles: [],
  styleUrls: [
    '../../assets/Resources/vendors/bootstrap/dist/css/bootstrap.min.css',
    '../../assets/Resources/vendors/DataTables-1.10.16/css/datatables.css',
    '../../assets/Resources/vendors/DataTables-1.10.16/plugin/Responsive-2.2.0/css/responsive.dataTables.min.css',
    '../../assets/Resources/vendors/DataTables-1.10.16/css/dataTables.bootstrap4.min.css',
    '../../assets/Bloque/convocatoria.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class ConvocatoriasComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(
      'a[href="#toggle-search"], .navbar-bootsnipp .bootsnipp-search .input-group-btn > .btn[type="reset"]'
    ).on('click', function(event) {
      event.preventDefault();
      $('.navbar-bootsnipp .bootsnipp-search .input-group > input').val('');
      $('.navbar-bootsnipp .bootsnipp-search').toggleClass('open');
      $('a[href="#toggle-search"]').closest('li').toggleClass('active');

      if ($('.navbar-bootsnipp .bootsnipp-search').hasClass('open')) {
        /* I think .focus dosen't like css animations, set timeout to make sure input gets focus */
        setTimeout(function() {
          $('.navbar-bootsnipp .bootsnipp-search .form-control').focus();
        }, 100);
      }
    });

    $(document).on('keyup', function(event) {
      if (
        event.which === 27 &&
        $('.navbar-bootsnipp .bootsnipp-search').hasClass('open')
      ) {
        $('a[href="#toggle-search"]').trigger('click');
      }
    });

    this.tableConvocatoria();
  }

  tableConvocatoria() {
    const tbl_convocatoria = $('#tbl_convocatoria').DataTable({
      autoWidth: false,
      searching: false,
      ordering: false,
      responsive: true,
      columnDefs: [
        { responsivePriority: 1, targets: 0 },
        { responsivePriority: 2, targets: 1 }
      ],
      lengthMenu: [ [ -1 ], [ 'All' ] ],
      language: {
        lengthMenu: '',
        zeroRecords: 'No hay registros',
        info: '',
        infoEmpty: 'Mostrando _PAGES_ fila(s)',
        infoFiltered: '(filtered from _MAX_ total records)'
      }
    });
    console.log('TABLe ', tbl_convocatoria);
  }
}
