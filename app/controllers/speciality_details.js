var args = arguments[0] || {};

var win = Ti.UI.createWindow({
	 backgroundColor: '#F0F0F2',
	 width: Ti.UI.FILL,
	 height: Ti.UI.FILL
});

win.addEventListener("open", function() {
	win.activity.actionBar.hide();
});

var header = Ti.UI.createView({
	width: Ti.UI.FILL,
	height: "56dp",
	top: "0dp",
	backgroundColor: "#5090CD"
});

var menu_btn = Ti.UI.createImageView({
	image: "/images/android/common/ic_menu_white_18dp.png",
	width: "24dp",
	touchEnable: false
});

var menu_btn_clk_area = Ti.UI.createView({
	width: "48dp",
	height: "48dp",
	left: "16dp"
});

menu_btn_clk_area.add(menu_btn);

var header_title = Ti.UI.createLabel({
	left: "72dp",
	text: "dr.consulta",
	color: "white",
	font: {
		fontSize: "20dp",
	}
});
header.add(menu_btn_clk_area);
header.add(header_title);
win.add(header);

var appointment_btn = Ti.UI.createLabel({
	height: "72dp",
	top: "64dp",
	left: "16dp",
	right: "16dp",
	color: "white",
	backgroundColor: "#E7B00F",
	borderColor: '#aaa',
	borderWidth: 1,
	text: "MARQUE UMA CONSULTA OU EXAME",
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	font: {
		fontSize: "20dp"
	}
});
appointment_btn.addEventListener("click", function(e){
	alert('Marcado');
});
win.add(appointment_btn);


// var aptt = Ti.UI.createView({
	// right: "16dp",
	// left: "16dp",
	// height: "200dp",
	// layout: "horizontal"
// });

var screenWidth = Ti.Platform.displayCaps.platformWidth / (Ti.Platform.displayCaps.dpi / 160);

var r1 = Ti.UI.createView({
	top: "144dp",
	left: "16dp",
	// right: "0dp",
	width: (screenWidth - 32) + "dp",
	height: "200dp",
	backgroundColor: "#000"
});

win.add(r1);

// var r2 = Ti.UI.createView({
	// // top: "352dp",
	// // left: "16dp",
	// // right: "16dp",
	// height: "200dp",
	// width: "8dp",
	// backgroundColor: "#9a9a9a"
// });
// 
// aptt.add(r2);
// 
// var r3 = Ti.UI.createView({
	// // top: "144dp",
	// // left: "0dp",
	// right: "0dp",
	// // width: "552dp",
	// height: "200dp",
	// backgroundColor: "#242424"
// });
// 
// aptt.add(r3);
// win.add(aptt);

win.open();