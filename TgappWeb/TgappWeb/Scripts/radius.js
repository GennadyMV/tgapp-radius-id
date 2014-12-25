$( document ).ready(function() {
	$('#alert-danger-login').hide();
	$('#alert-danger-datebgn').hide();
	$('#alert-danger-dateend').hide();
});


function Validation() {	
	var isOk = true;
	if (document.getElementById("login").value === '') {
		isOk = false;
		$('#alert-danger-login').show();
	}
	else {
		$('#alert-danger-login').hide();
	}
	if (document.getElementById("datebgn").value === '') {
		isOk = false;
		$('#alert-danger-datebgn').show();
	}
	else {
		$('#alert-danger-datebgn').hide();
	}
	if (document.getElementById("dateend").value === '') {
		isOk = false;
		$('#alert-danger-dateend').show();
	}
	else {
		$('#alert-danger-dateend').hide();
	}
	
	return isOk;
}