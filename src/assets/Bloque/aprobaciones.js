var table;

function tableSolicitudes() {
	
	table = $("#example").DataTable({
			ordering: false,
		    searching: false,
		    "scrollY": 200,
	        "scrollX": true,
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

$(document).ready(function() {
	tableSolicitudes();
});