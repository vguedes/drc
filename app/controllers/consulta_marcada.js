var args = arguments[0] || {};

			var especialidade = args['especialidade'];
			var doutor = args['doutor'];
			var data = args['data'];
			var horario = args['horario'];
			var clinica = args['clinica'];


//	Create & Define Window
Ti.UI.backgroundColor = 'white';
var win = Ti.UI.createWindow({
	 backgroundColor: '#eeeeee'
});

win.addEventListener("open", function() {
	win.activity.actionBar.hide();
});

Ti.App.addEventListener("clsAppntStack", function(data) {
	win.close();
});

// Create & Define BackButton
var buttonBack = Ti.UI.createButton({
  backgroundImage: '/images/android/common/ic_arrow_back_white_24dp.png',
    top: 11,
    width: 36,
    height: 36,
    left:5,
    zIndex:9
});

buttonBack.addEventListener('click',function(e){
    win.close();
});

//	Create & Define Title Label
var labelTitle = Ti.UI.createLabel({
	width: "100%",
	height: 58,
	color: "#fefffd",
	backgroundColor:"#5090cd",
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,font:{fontSize:18,fontWeight:'bold'},
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
	
	/*var especialidade = args['especialidade'];
			var doutor = args['doutor'];
			var data = args['data'];
			var horario = args['horario'];
			var clinica = args['clinica'];*/
	
	var labelLetterHTML = Ti.UI.createLabel({
	    textAlign:'left',
		left:50, top:18,
	    font:{fontSize:15},
	    width:150,
	    html:'<b>'+especialidade+'</b><br>Dr(a) '+doutor+' <br> CRM XXXXX'
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
	    font:{fontSize:15},
	    width:150,
	    html:'<b>'+data+'</b><br> '+horario+' hrs'
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
	    font:{fontSize:15},
	    width:150,
	    html:'<b>Clinica '+doutor+'</b><br>R. Silva Bueno, 2408 - Sacomã<br>Próxima ao terminal Sacomã<br><a href="#">VER NO MAPA</a>'
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
	    font:{fontSize:15},
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
	    font:{fontSize:15},
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
	    font:{fontSize:15},
	    width:150,
	    html:'<b>Shoppings</b><br>Se sua consulta é em uma unidade, fica próxima ao Shopping'
	});
	
	rowShop.add(labelLetterHTML);	
	
	//	Pushing Row
	tableData.push(rowShop);



//	Define TableRow BUTTON add


	var rowAction = Ti.UI.createTableViewRow({
	    className:'forumEvent',
	    height:100
	});


	//	Define & Add TableRow Childrens
	var buttonAction = Ti.UI.createButton({
	    backgroundImage: '/buttonoOk.png',
	    top: 9,
    	width: '102px',
	    height: '104px',
	    right:15,
	    zIndex:9
	});
	
	buttonAction.addEventListener('click',function(e){
		 // var indexView = Alloy.createController("index",{}).getView();
		 Ti.App.fireEvent('clsAppntStack', {});
		 
	
	   
	});


	
	rowAction.add(buttonAction);
	

//	Pushing Row
tableData.push(rowAction);


//}// END LOOP


//	Define Table
var table = Ti.UI.createTableView({
  	data: tableData,
  	top:65,
	left:"0px",
	color:"#6e6f71"
});


//	ADD objs to window
win.add(buttonBack);
win.add(labelTitle);
win.add(table);
win.open();
