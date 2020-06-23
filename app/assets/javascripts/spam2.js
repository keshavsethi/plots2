//Core component
//= require datatables/jquery.dataTables
//Bootstrap4 theme
//= require datatables/dataTables.bootstrap4

function table_main(id) {
	var table = $(id).DataTable({
		"order": [[1, "desc"]],
		"autoWidth": false,
		"search": {
			"regex": true
		},
		"scrollX": true,
		"paging": false,
		"info": false,
		"language": {
			"search": "Search in this page"
		}
	});
	$('#selectall').click(function () {
		$('.selectedId').prop('checked', this.checked);
		$('#select-count').text($('.selectedId').filter(":checked").length);
		disable_buttons('#selectall');
	});
	$('.selectedId').change(function () {
		var check = ($('.selectedId').filter(":checked").length === $('.selectedId').length);
		$('#select-count').text($('.selectedId').filter(":checked").length);
		$('#selectall').prop("checked", check);
		disable_buttons('.selectedId');
	});
	return table;
}

function disable_buttons(id) {
	if ($(id).is(":checked")) {
		$("#batch-spam, #batch-publish, #delete-batch, #batch-ban, #batch-unban").removeClass("disabled");
	} else {
		$("#batch-spam, #batch-publish, #delete-batch, #batch-ban, #batch-unban").addClass("disabled");
	}
}