var table_certificaciones;

(function($){
  $(function(){
    $('.button-collapse').sideNav();
    tableListado();
    $('.mod_edit').on('click', function() {
        $('#modal').modal({	opacity: 0	});
		$('#modal').modal('open');
    });
  });
})(jQuery);


function tableListado() {
	tbl_usuarios = $("#tbl_certificaciones").DataTable({
			
			dom : 	"<'row'<'col l6 m6 s12'f><'col l6 m6 s12'l>>" +
					"<'row'<'col l12 m12 s12'tr>>" +
					"<'row'<'col s12 m5'i><'col s12 m7'p>>",
					
			searching: true,
			ordering: false,
			scrollY: "46vh",
	        columnDefs: [
	        	{ width: "2%", targets: 0 },
	        	{ width: "4%", targets: 3, className: "center-align border-left" },
	        	{ width: "7%", targets: 4, className: "center-align border-left" },
	        	{ width: "4%", targets: 5, className: "center-align" },
	        	{ width: "4%", targets: 6, className: "center-align" },
	        	{ width: "5%", targets: 7, className: "center-align" },
	        	{ width: "7%", targets: 8, className: "center-align" },
	        	{ width: "3%", targets: 9, className: "center-align" },
	        	{ width: "7%", targets: 10, className: "center-align" },
	        	{ width: "8%", targets: 11 },
	        	{ width: "4%", targets: 12, className: "center-align" }
	         ],
		    language: {
		    	"sSearch":    "Buscar:",
	            "lengthMenu": "",
	            "zeroRecords": "No hay registros",
	            "info": "Filtrado de un total de _MAX_ registros",
	            "infoEmpty": "No se han encontrado registro",
	            "infoFiltered": ""
	        }
	});
	
	$('#mod_user').on('click', function() {
        $('#modal_user').modal({	opacity: 0	});
		$('#modal_user').modal('open');
    });
}