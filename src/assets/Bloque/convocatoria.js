var tbl_convocatoria;

(function($){
  $(function(){
	  tableConvocatoria();
  });
})(jQuery);

function tableConvocatoria() {
	tbl_convocatoria = $("#tbl_convocatoria").DataTable({
		autoWidth: false, 
		searching: false,
        ordering: false,
        responsive: true,
        columnDefs: [
            { responsivePriority: 1, targets: 0 },
            { responsivePriority: 2, targets: 1 }
        ],
        lengthMenu: [ [-1],["All"] ],
	    language: {
            "lengthMenu": "",
            "zeroRecords": "No hay registros",
            "info": "",
            "infoEmpty": "Mostrando _PAGES_ fila(s)",
            "infoFiltered": "(filtered from _MAX_ total records)"
        }
	});
	
}