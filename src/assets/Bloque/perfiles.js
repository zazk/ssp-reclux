var tbl_convocatoria;

(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    tableListado();
  });
})(jQuery);


function tableListado() {
	tbl_convocatoria = $("#tbl_convocatoria").DataTable({
			searching: false,
			ordering: false,
			scrollY: '100vh',
			"autoWidth": false,
	        scrollX: true,
	        /*columnDefs: [
	            { width: "2%", targets: 0 },
	            { width: "20%", targets: 1 },
	            { width: "8%", targets: 2 },
	            { width: "20%", targets: 3 },
	            { width: "20%", targets: 4 }
	         ],*/
		    language: {
	            "lengthMenu": "Listado",
	            "zeroRecords": "No hay registros",
	            "info": "",
	            "infoEmpty": "Mostrando _PAGES_ fila(s)",
	            "infoFiltered": "(filtered from _MAX_ total records)"
	        }
	});
}