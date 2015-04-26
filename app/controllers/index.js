var db = Ti.Database.install('/dr.db', '_alloy_');
db.close();

// if (OS_IOS) {
	// $.navGroupWin.open();
// }
// if (OS_ANDROID) {
$.index.addEventListener('open', function(e) {
    $.index.activity.actionBar.hide();
});
	$.index.open();
// }


function load_exames() {
	alert("exames");
}
function load_saude_crianca() {
	var articlesView = Alloy.createController("articles", {'articlesSession': 'crianca'}).getView();
    // if (OS_IOS) {
        // $.navGroupWin.openWindow(saudeaz_view);
    // }
 	// if (OS_ANDROID) {
 		articlesView.addEventListener('open', function(e) {
   			articlesView.activity.actionBar.hide();
		});
        articlesView.open();
    // }    

}
function load_saude_az() {
	var saudeaz_view = Alloy.createController("articles", {}).getView();
    // if (OS_IOS) {
        // $.navGroupWin.openWindow(saudeaz_view);
    // }
 	// if (OS_ANDROID) {
 		saudeaz_view.addEventListener('open', function(e) {
   			saudeaz_view.activity.actionBar.hide();
		});
        saudeaz_view.open();
    // }    
} 

function load_gravidez() {
	var saudeaz_view = Alloy.createController("onboarding", {}).getView();
    // if (OS_IOS) {
        // $.navGroupWin.openWindow(saudeaz_view);
    // }
 	// if (OS_ANDROID) {
 		saudeaz_view.addEventListener('open', function(e) {
   			saudeaz_view.activity.actionBar.hide();
		});
        saudeaz_view.open();
    // } 
}
