

//	Create & Define Window
Ti.UI.backgroundColor = 'white';
var win = Ti.UI.createWindow({
	 backgroundColor: '#eeeeee'
});

// Create & Define BackButton
var buttonBack = Ti.UI.createButton({
    backgroundImage: '/left_arrow.png',
    top: 9,
    width: 30,
    height: 20,
    left:5,
    zIndex:9
});

buttonBack.addEventListener('click',function(e){
    win.close();
});

//	Create & Define Title Label
var labelTitle = Ti.UI.createLabel({
	width: "100%",
	height: "65px",
	color: "#fefffd",
	backgroundColor:"#5090cd",
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	top:"0",
	text:"5. Consulta marcada"
});


//	Define Data /Parse JSON
var tableData = [];
var tableJsonDataClean = '{"consultas":[{"title":"Almoço"},{"title":"Almoço"},{"title":"Almoço"},{"title":"Almoço"},{"title":"Almoço"},{"title":"Almoço"},{"title":"Almoço"},{"title":"Almoço"},{"title":"Almoço"},{"title":"Almoço"},{"title":"Almoço"},{"title":"Beirute"},{"title":"Beirute"},{"title":"Beirute"},{"title":"Beirute"},{"title":"Beirute"},{"title":"Beirute"},{"title":"Beirute"},{"title":"Caldo de Cana"},{"title":"Caldo de Cana"},{"title":"Caldo de Cana"},{"title":"Caldo de Cana"},{"title":"Caldo de Cana"},{"title":"Caldo de Cana"},{"title":"Caldo de Cana"},{"title":"Caldo de Cana"},{"title":"Caldo de Cana"},{"title":"Caldo de Cana"}]}';
var	tableJsonData = JSON.parse(tableJsonDataClean);
	
var tableDataLength = tableJsonData.consultas.length;

var letters = [];

//	START LOOP INTO DATA ARRAY
//for (var i=1; i<tableDataLength; i++){
	
	//	Define data after parse
	//var rowData = tableJsonData.consultas[i];

	//	Define TableRow
	var row = Ti.UI.createTableViewRow({
	    className:'forumEvent'
	});


	//	Define & Add TableRow Childrens
	var icoPerson = Ti.UI.createImageView({
	  image:'/iconPerson.png',
	  width:'27px',
	  height:'37px',
	  left:20,
	  top:5
	});
	
	row.add(icoPerson);
	
	var labelLetterHTML = Ti.UI.createLabel({
	    textAlign:'left',
		left:50, top:18,
	    font:{fontSize:12},
	    width:150,
	    html:'<b>Ginecologista</b><br>Dr(a) Mirela Faria <br> CRM 112459'
	});
	
	row.add(labelLetterHTML);	
	
	//	Pushing Row
	tableData.push(row);
	
	
	////
	
	//	Define TableRow Horario
	var rowHorario = Ti.UI.createTableViewRow({
	    className:'forumEvent'
	});


	//	Define & Add TableRow Childrens
	var icoPerson = Ti.UI.createImageView({
	  image:'/iconPerson.png',
	  width:'27px',
	  height:'37px',
	  left:20,
	  top:5
	});
	
	rowHorario.add(icoPerson);
	
	var labelLetterHTML = Ti.UI.createLabel({
	    textAlign:'left',
		left:50, top:18,
	    font:{fontSize:12},
	    width:150,
	    html:'<b>Quarta, 11 de Fevereiro</b><br> 15:00 hrs'
	});
	
	rowHorario.add(labelLetterHTML);	
	
	//	Pushing Row
	tableData.push(rowHorario);
	
	////
	
	//	Define TableRow Endereco
	var rowEnd = Ti.UI.createTableViewRow({
	    className:'forumEvent'
	});


	//	Define & Add TableRow Childrens
	var icoPerson = Ti.UI.createImageView({
	  image:'/iconPerson.png',
	  width:'27px',
	  height:'37px',
	  left:20,
	  top:5
	});
	
	rowEnd.add(icoPerson);
	
	var labelLetterHTML = Ti.UI.createLabel({
	    textAlign:'left',
		left:50, top:18,
	    font:{fontSize:12},
	    width:150,
	    html:'<b>Clinica Sacomã</b><br>R. Silva Bueno, 2408 - Sacomã<br>Próxima ao terminal Sacomã<br><a href="#">VER NO MAPA</a>'
	});
	
	rowEnd.add(labelLetterHTML);	
	
	//	Pushing Row
	tableData.push(rowEnd);
	
	
	////
	
	//	Define TableRow Pagamento
	var rowPag = Ti.UI.createTableViewRow({
	    className:'forumEvent'
	});


	//	Define & Add TableRow Childrens
	var icoPerson = Ti.UI.createImageView({
	  image:'/iconPerson.png',
	  width:'27px',
	  height:'37px',
	  left:20,
	  top:5
	});
	
	rowPag.add(icoPerson);
	
	var labelLetterHTML = Ti.UI.createLabel({
	    textAlign:'left',
		left:50, top:18,
	    font:{fontSize:12},
	    width:150,
	    html:'<b>R$ 90,00</b><br>Parcelamento em até 3x'
	});
	
	rowPag.add(labelLetterHTML);	
	
	//	Pushing Row
	tableData.push(rowPag);
	
		////
	
	//	Define TableRow Documentos
	var rowDoc = Ti.UI.createTableViewRow({
	    className:'forumEvent'
	});


	//	Define & Add TableRow Childrens
	var icoPerson = Ti.UI.createImageView({
	  image:'/iconPerson.png',
	  width:'27px',
	  height:'37px',
	  left:20,
	  top:5
	});
	
	rowDoc.add(icoPerson);
	
	var labelLetterHTML = Ti.UI.createLabel({
	    textAlign:'left',
		left:50, top:18,
	    font:{fontSize:12},
	    width:150,
	    html:'<b>Documentos</b><br>Lembre-se de trazer seus medicamentos em uso e documentos de identidade:RG,CPF ou Carteira de Motorista'
	});
	
	rowDoc.add(labelLetterHTML);	
	
	//	Pushing Row
	tableData.push(rowDoc);


		////
	
	//	Define TableRow Shopping
	var rowShop = Ti.UI.createTableViewRow({
	    className:'forumEvent'
	});


	//	Define & Add TableRow Childrens
	var icoPerson = Ti.UI.createImageView({
	  image:'/iconPerson.png',
	  width:'27px',
	  height:'37px',
	  left:20,
	  top:5
	});
	
	rowShop.add(icoPerson);
	
	var labelLetterHTML = Ti.UI.createLabel({
	    textAlign:'left',
		left:50, top:18,
	    font:{fontSize:12},
	    width:150,
	    html:'<b>Shoppings</b><br>Se sua consulta é em uma unidade, fica próxima ao Shopping'
	});
	
	rowShop.add(labelLetterHTML);	
	
	//	Pushing Row
	tableData.push(rowShop);



//	Define TableRow BUTTON add


	var rowAction = Ti.UI.createTableViewRow({
	    className:'forumEvent',
	    height:50
	});


	//	Define & Add TableRow Childrens
	var buttonAction = Ti.UI.createButton({
	    backgroundImage: '/buttonoOk.png',
	    top: 9,
	    width: '62px',
	    height: '64px',
	    right:20,
	    zIndex:9
	});
	
	buttonAction.addEventListener('click',function(e){
	    var consultaMarcadaView = Alloy.createController("consulta_marcada",{}).getView();
	});


	
	rowAction.add(buttonAction);
	

//	Pushing Row
tableData.push(rowAction);


//}// END LOOP


//	Define Table
var table = Ti.UI.createTableView({
  	data: tableData,
  	top:"84px",
	left:"0px",
	color:"#6e6f71"
});


//	ADD objs to window
win.add(buttonBack);



win.add(labelTitle);
win.add(table);
win.open();
