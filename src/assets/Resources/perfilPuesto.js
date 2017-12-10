var tbl_funciones;
var tbl_conocimiemtos;

function tableFunciones() {
	tbl_funciones = $("#tblfunciones").DataTable({
		autoWidth: false,
		ordering: false,
	    searching: false,
	    bLengthChange: false,
	    lengthMenu: [ [10],[10] ],
	    language: {
            "lengthMenu": "Display _MENU_ records per page",
            "zeroRecords": "No hay registros",
            "info": "Total _MAX_ Registros)",
            "infoEmpty": "Mostrando _PAGES_ fila(s)",
            "infoFiltered": "(filtered from _MAX_ total records)"
        }
	});
}

function tableConocimientos() {
	tbl_conocimiemtos = $("#tblconocimientos").DataTable({
		ordering: false,
	    searching: false,
	    bLengthChange: false,
	    lengthMenu: [ [10],[10] ],
	    language: {
            "lengthMenu": "Display _MENU_ records per page",
            "zeroRecords": "No hay registros",
            "info": "Total _MAX_ Registros)",
            "infoEmpty": "Mostrando _PAGES_ fila(s)",
            "infoFiltered": "(filtered from _MAX_ total records)"
        }
	});
}

function Carreras() {
		
		$('input[id=deas]').tagsinput({
			  itemValue: 'value',
			  itemText: 'text',
			  typeahead: {
				    source: function(query) {
				      return $.getJSON('cities.json');
				    }
			 }
		});
		
		$('input[id=deas]').tagsinput('add', { "value": 1 , "text": "Amsterdam"  });
}

$(document).ready(function() {
	tableFunciones();
	tableConocimientos();
});
