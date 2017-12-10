var tbl_perfiles;
var tbl_usuarios;


(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $("#includedContent").load("men.html"); 
    tableListadoUsuarios();
    tableListadoPerfiles();
  });
})(jQuery);


function tableListadoPerfiles() {
	tbl_perfiles = $("#tbl_perfiles").DataTable({
			dom : 	"<'row'<'col l6 m6 s12'f><'col l6 m6 s12'l>>" +
					"<'row'<'col l6 m6 s12 border-right'tr><'col l6 m6 s12 pag'>>" +
					"<'row'<'col s12 m5'i><'col s12 m7'p>>",
					
			searching: true,
			ordering: false,
			scrollY: "39vh",
			columnDefs: [
	        	{ width: "3%", targets: 0 },
	        	{ width: "87%", targets: 1 },
	            { width: "10%", targets: 2 }
	         ],
	         language: {
			    	"sSearch":    "Buscar:",
		            "lengthMenu": "<a id='mod_funcion' class='left-align waves-effect waves-light btn grey'>Nuevo</a>",
		            "zeroRecords": "No hay registros",
		            "info": "Filtrado de un total de _MAX_ registros",
		            "infoEmpty": "No se han encontrado registro",
		            "infoFiltered": ""
	         }
	});
	
	var pags = "<h6 class='center-align' style='color: #606060;'>Permisos Asignados</h6>"+
				"<table id='tbl_pages' class='display highlight nowrap' cellspacing='0' width='100%' >"+
					"<thead>"+
						"<tr>"+
							"<th></th>" +
							"<th>Listar</th>" +
		            		"<th>Registrar</th> "+
		            		"<th>Modificar</th>"+
						"<tr>"+
					"</thead>"+
					"<tbody>"+
						"<tr>"+
							"<td>Pagina 1</td>"+
							"<td><p style='margin: 0;'><input type='checkbox' id='hc1' checked='checked' disabled='disabled'><label for='hc1'></label></p></td>"+
							"<td></td>"+
							"<td><p style='margin: 0;'><input type='checkbox' id='hc1' checked='checked' disabled='disabled'><label for='hc1'></label></p></td>"+
						"</tr>"+
						"<tr>"+
							"<td>Pagina 2</td>"+
							"<td><p style='margin: 0;'><input type='checkbox' id='hc1' checked='checked' disabled='disabled'><label for='hc1'></label></p></td>"+
							"<td><p style='margin: 0;'><input type='checkbox' id='hc1' checked='checked' disabled='disabled'><label for='hc1'></label></p></td>"+
							"<td><p style='margin: 0;'><input type='checkbox' id='hc1' checked='checked' disabled='disabled'><label for='hc1'></label></p></td>"+
						"</tr>"+	
						"<tr>"+
							"<td>Pagina 3</td>"+
							"<td><p style='margin: 0;'><input type='checkbox' id='hc1' checked='checked' disabled='disabled'><label for='hc1'></label></p></td>"+
							"<td><p style='margin: 0;'><input type='checkbox' id='hc1' checked='checked' disabled='disabled'><label for='hc1'></label></p></td>"+
							"<td></td>"+
						"</tr>"+	
					"</tbody>"+
				"</table>";
	
	$( ".pag" ).append( pags );
	
	$('#mod_funcion').on('click', function() {
        $('#modal').modal({	opacity: 0	});
		$('#modal').modal('open');
    });
}

function tableListadoUsuarios() {
	tbl_usuarios = $("#tbl_usuarios").DataTable({
			
			dom : 	"<'row'<'col l6 m6 s12'f><'col l6 m6 s12'l>>" +
					"<'row'<'col l12 m12 s12'tr>>" +
					"<'row'<'col s12 m5'i><'col s12 m7'p>>",
					
			searching: true,
			ordering: false,
			scrollY: "39vh",
	        columnDefs: [
	        	{ width: "3%", targets: 0 },
	        	{ width: "20%",targets: 1 },
	            { width: "20%", targets: 2 },
	            { width: "10%", targets: 3 },
	            { width: "20%", targets: 4 },
	         ],
		    language: {
		    	"sSearch":    "Buscar:",
	            "lengthMenu": "<a id='mod_user' class='left-align waves-effect waves-light btn grey'>Nuevo</a>",
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