var tbl_funciones;
var tbl_idiomas;

function tableFunciones() {
	tbl_funciones = $("#tbl_funciones").DataTable({
			autoWidth: false, 
			searching: false,
	        ordering: false,
	        lengthMenu: [ [5],[5] ],
		    language: {
	            "lengthMenu": "",
	            "zeroRecords": "No hay registros",
	            "info": "",
	            "infoEmpty": "Mostrando _PAGES_ fila(s)",
	            "infoFiltered": "(filtered from _MAX_ total records)"
	        }
	});
	
	$('#tbl_funciones tbody').on( 'click', '.remov', function () {
		tbl_funciones.row( $(this).parents('tr') ).remove().draw();
	} );
	
	$('#tbl_funciones tbody').on( 'click', '.edit', function () {
		var row = 	$(this).parents('tr');
		var das = 	tbl_funciones.cell( row, 0).data();
		var fc = 	tbl_funciones.cell( row, 1).data();
		var ce = 	tbl_funciones.cell( row, 2).data();
		var com = 	tbl_funciones.cell( row, 3).data();
		
		$("#descripcion_funcion_up").val( das );
		$("#fc_funcion_up").val(fc);
		$("#ce_funcio_up").val(ce);
		$("#com_funcion_up").val(com);
		 
		$('#modal_up').modal('open');
		
		$('#row_update').val( row.index() );
	} );
}
function addFuncion() {
	$('#modal_up').modal({	opacity: 0	});
	
	$('#mod_funcion').on('click', function() {
        $('#modal').modal({	opacity: 0	});
		$('#modal').modal('open');
    });
	
	$('#funcion_add').on('click', function() {
		
		var des = $("#descripcion_funcion").val();
		
		if ( des.length > 3 ) {
			var fc = $("#fc_funcion").val();
			var ce = $("#ce_funcion").val();
			var com = $("#com_funcion").val();
			var total = ( parseInt(fc)+parseInt(ce)+parseInt(com) ) / 3;
			
			var edit2 = "<a href='javascript:;' class='waves-effect edit'><i class='fa fa-pencil-square-o' style='color: #03a9f4; font-size: 20px;'></i></a>";
			var remov2 = "<a href='javascript:;' class='waves-effect remov'><i class='fa fa-times-circle' style='color: red; font-size: 20px;'></i></a>";
			
			tbl_funciones.row.add( [ des, fc, ce, com, Math.round(total),edit2 + remov2  ] ).draw( false );
			$('#modal').modal('close');
			
			$("#descripcion_funcion").val(null);
			$("#fc_funcion").val(1);
			$("#ce_funcion").val(1);
			$("#com_funcion").val(1);
		}
		else{
			alert("La descripcion debe tener minimo 5 digitos");
		}
    });
}

function updateFuncion() {
	$('#funcion_update').on('click', function() {
		
		var des = $("#descripcion_funcion_up").val();
		
		if ( des.length > 3 ) {
			var row = $("#row_update").val();
			var fc = $("#fc_funcion_up").val();
			var ce = $("#ce_funcio_up").val();
			var com = $("#com_funcion_up").val();
			var total = ( parseInt(fc)+parseInt(ce)+parseInt(com) ) / 3;
			
			tbl_funciones.cell( row , 0).data(des);
			tbl_funciones.cell( row , 1).data(fc);
			tbl_funciones.cell( row , 2).data(ce);
			tbl_funciones.cell( row , 3).data(com);
			tbl_funciones.cell( row , 4).data( Math.round(total) );
			
			$('#modal_up').modal('close');
			
			$("#descripcion_funcion_up").val(null);
			$("#fc_funcion_up").val(1);
			$("#ce_funcio_up").val(1);
			$("#com_funcion_up").val(1);
		}
		else{
			alert("La descripcion debe tener minimo 5 digitos");
		}
    });
}

function tableIdiomas() {
	tbl_idiomas = $("#tbl_funciones").DataTable({
		autoWidth: false, 
		searching: false,
        ordering: false,
        lengthMenu: [ [5],[5] ],
	    language: {
            "lengthMenu": "",
            "zeroRecords": "No hay registros",
            "info": "",
            "infoEmpty": "Mostrando _PAGES_ fila(s)",
            "infoFiltered": "(filtered from _MAX_ total records)"
        }
	});
}

function inputAutocomplete() {
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

$(document).ready(function() {
	$('.button-collapse').sideNav();
	
	tableFunciones();
	addFuncion();
	updateFuncion();
	inputAutocomplete();
	
	/*$('.switeable').tabs({ 
		'responsiveThreshold' : false,
		'swipeable': true
	});*/
});