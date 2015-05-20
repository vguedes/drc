Ti.UI.backgroundColor = 'white';
var win = Ti.UI.createWindow({
	 backgroundColor: 'white'
});

Ti.App.addEventListener("clsAppntStack", function(data) {
	win.close();
});

win.addEventListener("open", function() {
	win.activity.actionBar.hide();
});



var viewTitle = Ti.UI.createView({
	width: Titanium.UI.FILL,
	height: "56dp",
 	backgroundColor:"#5090cd",
	top: 0
});	

// Create & Define BackButton
var clickable_area = Ti.UI.createView({
    top: "5dp",
    width: "48dp",
    height: "48dp",
    left:"0dp",
    zIndex:999
});

var backArrow = Ti.UI.createImageView({
  backgroundImage: '/images/android/common/ic_arrow_back_white_24dp.png',
    width: "24dp",
    height: "24dp",touchEnabled: false,
    left:"16dp"
});

clickable_area.add(backArrow);

clickable_area.addEventListener('click', function(e){
	win.close();
});


var labelTitleText = Ti.UI.createLabel({
	height: Titanium.UI.FILL,
 	color: "white",
 	font: {fontWeight:'bold',fontSize: "20dp"},
	left: "72dp",zIndex:999, text:"Cotação"
});

viewTitle.add(labelTitleText);
viewTitle.add(clickable_area);


var buttonAction = Ti.UI.createButton({
    backgroundImage: '/buttonGo.png',
    top: "9dp",
    width: '56dp',
    height: '56dp',
    right:"16dp",
    zIndex:9
});

buttonAction.addEventListener("click", function(e){
	var consultaMarcadaView = Alloy.createController("consulta_marcada",{
						    	"especialidade": especialidade,
						    	"doutorId": doutorId,
								"doutor": doutor,
								"doutorCrm": doutorCrm,
								"data":data,
								"horario":horario,
								"clinica":clinica,
								"endereco_clinica": endereco_clinica,
								"preco": preco
						    }).getView();
});

win.add(buttonAction);



win.add(viewTitle);