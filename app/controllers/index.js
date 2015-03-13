if (OS_IOS) {
	$.navGroupWin.open();
}
if (OS_ANDROID) {
	$.index.open();
}


function load_exames() {
	alert("exames");
}
function load_saude_crianca() {
	alert("saude crianca");
}
function load_saude_az() {
	var saudeaz_view = Alloy.createController("articles", {}).getView();
    if (OS_IOS) {
        $.navGroupWin.openWindow(saudeaz_view);
    }
 	if (OS_ANDROID) {
        saudeaz_view.open();
    }    
} 

function load_gravidez() {
	alert("gravidez");
}
