$( document ).ready(function() {
	$('#alert-danger-login').hide();
	$('#alert-danger-datebgn').hide();
	$('#alert-danger-dateend').hide();		
	
	Init();
	if (document.getElementById("p_login").value == "" ) {
		$('#login_head').hide();
	}
});

function Init() {
	
	if (Validation(false) == true) {
		SubmitSearch(0);
		return;
	}
	if (ValidationLogin(false) == true && ValidationPeriod() == true)	
	{
		var period = document.getElementById("period").value;
		SubmitSearch(period);
		return;
	}
}


function Validation(thisShowAlert) {	
	var isOk = true;
	if (ValidationLogin(thisShowAlert) == false) {
		isOk = false;
	}
	
	if (document.getElementById("datebgn").value === '' || document.getElementById("datebgn").value === 'Дата начала периода') {
		isOk = false;
		if (thisShowAlert == true) $('#alert-danger-datebgn').show();
	}
	else {
		$('#alert-danger-datebgn').hide();
	}
	if (document.getElementById("dateend").value === '' || document.getElementById("dateend").value === 'Дата конца периода') {
		isOk = false;
		if (thisShowAlert == true) $('#alert-danger-dateend').show();
	}
	else {
		$('#alert-danger-dateend').hide();
	}
	
	return isOk;
}

function ValidationLogin(thisShowAlert) {	
	var isOk = true;
	if (document.getElementById("login").value === '' || document.getElementById("login").value === 'Введите логин') {
		isOk = false;
		if (thisShowAlert == true)  $('#alert-danger-login').show();
	}
	else {
		$('#alert-danger-login').hide();
	}	
	$('#alert-danger-datebgn').hide();
	$('#alert-danger-dateend').hide();
	return isOk;
}

function ValidationPeriod() {	
	var isOk = true;
	if (document.getElementById("period").value === '' || document.getElementById("period").value === '0') {
		isOk = false;		
	}
	return isOk;
}

function ResultClickAutorization(index) {	
		var tr = document.getElementById("tr_autorization_"+index);		
		tr.className = "success";
};


function ResultClickSessions(index) {	
		var tr = document.getElementById("tr_sessions_"+index);		
		tr.className = "success";
			
		$($(tr).attr("data-target")).draggable({
			handle: ".modal-header"
		});
};


function ResultClickTraffic(index) {	
		var tr = document.getElementById("tr_traffic_"+index);		
		tr.className = "success";
};

function ResultClickTariff(index) {	
		var tr = document.getElementById("tr_tariff_"+index);		
		tr.className = "success";
};

