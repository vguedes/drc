var db = Ti.Database.install('/dr.db', '_alloy_');
db.close();

$.index.addEventListener('open', function(e) {
    $.index.activity.actionBar.hide();
    var screenWidth = Ti.Platform.displayCaps.platformWidth / (Ti.Platform.displayCaps.dpi / 160);
	var ciWidth = ((screenWidth - 40) / 2) + 'dp';
	console.log(ciWidth);
	$.ci1.setWidth(ciWidth);
	$.ci2.setWidth(ciWidth);
	$.ci3.setWidth(ciWidth);
	$.ci4.setWidth(ciWidth);
});
$.index.open();

console.log(Ti.Platform.displayCaps.density, "-------------->>>>>");
console.log(Ti.Platform.displayCaps.platformWidth, "-------------->>>>>");

function load_exame() {
	 var saudeaz_view = Alloy.createController("articles", {}).getView();
 		 saudeaz_view.addEventListener('open', function(e) {
   			 saudeaz_view.activity.actionBar.hide();
		 });
         saudeaz_view.open();
 }

function load_gravidez() {
	var saudeaz_view = Alloy.createController("onboarding", {}).getView();
	saudeaz_view.addEventListener('open', function(e) {
		saudeaz_view.activity.actionBar.hide();
	});
}

// function load_phone_auth() {
	// var v = Alloy.createController("onboarding", {}).getView();
 		// v.addEventListener('open', function(e) {
   			// v.activity.actionBar.hide();
		// });
        // v.open();
// }

// function debug_phone_auth() {
       // var consultaView = Alloy.createController("httpMock", {}).getView();
// }

function load_consulta() {
 	var v = Alloy.createController("lista_especialidades", {'appointment': true}).getView();
 		v.addEventListener('open', function(e) {
   			v.activity.actionBar.hide();
		});
        v.open();
}

function load_consulta_pacient() {
 	var v = Alloy.createController("dados_paciente", {'appointment': true}).getView();
        v.open();
}

function open_dicas() {
	var v = Alloy.createController("dicas", {}).getView();
 		v.addEventListener('open', function(e) {
   			v.activity.actionBar.hide();
		});
        v.open();
}

function open_partes_corpo() {
	var v = Alloy.createController("partes_corpo", {}).getView();
 		v.addEventListener('open', function(e) {
   			v.activity.actionBar.hide();
		});
        v.open();
}

function open_gravidez(){
	var consultaView = Alloy.createController("artigos", {'articlesSession': 'gravidez', 'window_title': 'Gravidez e recém nascido'}).getView();
}

function open_exames(){
	var consultaView = Alloy.createController("artigos", {'articlesSession': 'exames', 'window_title': 'Exames'}).getView();
}

 function open_alert() {
 	var consultaView = Alloy.createController("marque_horario", {}).getView();
 }
 
 function open_gineco() {
 	var consultaView = Alloy.createController("artigos", {'articlesSession': 'gravidez', 'window_title': 'Ginecologista'}).getView();
 }
 
 function open_pele_lesada() {
 	var v = Alloy.createController("article_details", {'articleId': '122', 'article': 'Pele lesada\npelo sol'}).getView();
 		v.addEventListener('open', function(e) {
   			v.activity.actionBar.hide();
		});
        v.open();
 }
 
function open_exame_medico_geral() {
 	var v = Alloy.createController("article_details", {'articleId': '123', 'article': 'Exame médico\ngeral'}).getView();
 		v.addEventListener('open', function(e) {
   			v.activity.actionBar.hide();
		});
        v.open();
 }
 function open_lista_especialidades() {
 	var v = Alloy.createController("lista_especialidades", {'appointment': false}).getView();
 		v.addEventListener('open', function(e) {
   			v.activity.actionBar.hide();
		});
        v.open();
 }

function toggle_menu() {
	$.side_menu.visible = ! ($.side_menu.visible);
}

function open_menu_teste() {
 	var consultaView = Alloy.createController("TESTE_menu", {}).getView();
}
 
function open_appointments(){
	toggle_menu();
	var consultaView = Alloy.createController("appointments", {}).getView();
}

// Load appointments counter
var db = Ti.Database.open('_alloy_');
// Deveria funcionar, maaaaaaas...
// var query = "SELECT COUNT(id) as appointments FROM appointment where date_time > " + (new Date()).toISOString() + ";";
var appts_counter = 0;
var now = new Date();
var query = "SELECT date_time FROM appointments;";
var appointmentsRS = db.execute(query); 
while (appointmentsRS.isValidRow()) {
	var apptDateTime = new Date(appointmentsRS.fieldByName('date_time'));
	if (apptDateTime > now) {
		appts_counter += 1;
	};
	appointmentsRS.next();
}
// var appts_counter = appointments.fieldByName('appointments');
$.appointments_counter.text = appts_counter;


