var table_cronograma;

(function($){
  $(function(){
    $('.button-collapse').sideNav();
    
    tableListado();
    
    $('.fecha').daterangepicker({
	    singleDatePicker: true,
	    locale: { format: 'DD/MM/YYYY' }
	}, function(start, end, label) {	});
	
  });
})(jQuery);


function tableListado() {
	table_cronograma = $("#tbl_cronograma").DataTable({
			dom : 	"<'row'<'col l6 m6 s12'l><'col l6 m6 s12'f>>" +
					"<'row'<'col l12 m12 s12'tr>>" +
					"<'row'<'col s12 m5'i><'col s12 m7'p>>",
					
			searching: false,
			ordering: false,
			scrollY: "45vh",
	        columnDefs: [
	        	{ width: "2%", targets: 0, className: "center-align", visible: false },
				{ width: "2%", targets: 1 },
				{ width: "6%", targets: 3, className: "bordleft center-align" },
				{ width: "10%", targets: 4, className: "bordleft" },
				{ width: "10%", targets: 5, className: "bordleft"  },
				{ width: "10%", targets: 6, className: "bordleft" },
				{ width: "10%", targets: 7, className: "bordleft" },
				{ width: "10%", targets: 8, className: "bordleft" },
				{ width: "4%", targets: 9, className: "bordleft center-align" },
				{ width: "10%", targets: 10, className: "bordleft center-align" },
	        	{ width: "10%", targets: -1, className: "bordleft center-align" }
	         ],
		    language: {
		    	"sSearch":    "Buscar:",
	            "lengthMenu":	"",	
	            "zeroRecords": "No hay registros",
	            "info": "<a id='cronog' class='waves-effect waves-light Green lighten-2'><i class='fa fa-arrow-up' style='font-size:18px;'></i></a>&nbsp;&nbsp;&nbsp;Filtrado de un total de _MAX_ registros",
	            "infoEmpty": "No se han encontrado registro",
	            "infoFiltered": ""
	        }
	});
	
	$('#programar,#modificar,#anular').on('click', function() {
        var column = table_cronograma.column( 0 );
        column.visible( ! column.visible() );
    });
	
	$('#cronog').on('click', function() {
		$('#modal').modal({	opacity: 0	});
		$('#modal').modal('open');
    });
}