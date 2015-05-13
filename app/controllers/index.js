var db = Ti.Database.install('/dr.db', '_alloy_');
db.close();

$.index.addEventListener('open', function(e) {
    $.index.activity.actionBar.hide();
});
$.index.open();


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
	var v = Alloy.createController("especialidades", {}).getView();
 		v.addEventListener('open', function(e) {
   			v.activity.actionBar.hide();
		});
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
 	var v = Alloy.createController("lista_especialidades", {}).getView();
 		v.addEventListener('open', function(e) {
   			v.activity.actionBar.hide();
		});
        v.open();
 }

function toggle_menu() {
	$.side_menu.visible = ! ($.side_menu.visible);
}
