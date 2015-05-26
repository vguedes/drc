var args = arguments[0] || {};

			var especialidade = args['especialidade'];
			var doutorId = args['doutorId'];
			var doutor = args['doutor'];
			var doutorCrm = args['doutorCrm'];
			var data = args['data'];
			var horario = args['horario'];
			var clinica = args['clinica'];
			var preco = args['preco'];
			var endereco_clinica = args['endereco_clinica'];


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
// var buttonBack = Ti.UI.createButton({
  // backgroundImage: '/images/android/common/ic_arrow_back_white_24dp.png',
    // top: 11,
    // width: 36,
    // height: 36,
    // left:5,
    // zIndex:9
// });
// 
// buttonBack.addEventListener('click',function(e){
    // win.close();
// });

//	Create & Define Title Label
var labelTitle = Ti.UI.createLabel({
	width: "100%",
	height: "56dp",
	color: "#fefffd",
	backgroundColor:"#5090cd",
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,font:{fontSize:"20dp",fontWeight:'bold'},
	top:"0",
	text:"Consulta marcada"
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
	  image:'/images/android/common/icon_consulta_marcada/01.png',
	  width:'28dp',
	  height:'28dp',
	  left:"20dp",
	  top:"5dp"
	});
	
	row.add(icoPerson);
	
	/*var especialidade = args['especialidade'];
			var doutor = args['doutor'];
			var data = args['data'];
			var horario = args['horario'];
			var clinica = args['clinica'];*/
	
	var labelLetterHTML = Ti.UI.createLabel({
	    textAlign:'left',
		left:"50dp", top:"18dp",
	    font:{fontSize:"15dp"},
	    width:"150dp",
	    html:'<b>'+especialidade+'</b><br>Dr(a) '+doutor+' <br> CRM ' + doutorCrm
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
	  image:'/images/android/common/icon_consulta_marcada/02.png',
	  width:'28dp',
	  height:'28dp',
	  left:"20dp",
	  top:"5dp"
	});
	
	rowHorario.add(icoPerson);
	
	var labelLetterHTML = Ti.UI.createLabel({
	    textAlign:'left',
		left:"50dp", top:"18dp",
	    font:{fontSize:"15dp"},
	    width:"150dp",
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
	  image:'/images/android/common/icon_consulta_marcada/03.png',
	  width:'28dp',
	  height:'28dp',
	  left:"20dp",
	  top:"5dp"
	});
	
	rowEnd.add(icoPerson);
	
	var labelLetterHTML = Ti.UI.createLabel({
	    textAlign:'left',
		left:"50dp", top:"18dp",
	    font:{fontSize:"15dp"},
	    width:"150dp",
	    html:'<b>Clinica '+clinica+'</b><br>' + endereco_clinica
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
	  image:'/images/android/common/icon_consulta_marcada/04.png',
	  width:'28dp',
	  height:'28dp',
	  left:"20dp",
	  top:"5dp"
	});
	
	rowPag.add(icoPerson);
	
	var labelLetterHTML = Ti.UI.createLabel({
	    textAlign:'left',
		left:"50dp", top:"18dp",
	    font:{fontSize:"15dp"},
	    width:"150dp",
	    html:'<b>R$ ' + preco + '</b><br>Parcelamento em dinheiro ou no cartão de\ndébito/crédito\nÀ vista ou parcelado'
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
	  image:'/images/android/common/icon_consulta_marcada/05.png',
	  width:'28dp',
	  height:'28dp',
	  left:"20dp",
	  top:"5dp"
	});
	
	rowDoc.add(icoPerson);
	
	var labelLetterHTML = Ti.UI.createLabel({
	    textAlign:'left',
		left:"50dp", top:"18dp",
	    font:{fontSize:"15dp"},
	    width:"150dp",
	    html:'<b>Dúvidas e cancelamentos</b><br>Ligue para (11) 2065 1325 de segunda a\nsexta das 8h às 19h.'
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
	  image:'/images/android/common/icon_consulta_marcada/06.png',
	  width:'28px',
	  height:'28px',
	  left:"20dp",
	  top:"5dp"
	});
	
	rowShop.add(icoPerson);
	
	var labelLetterHTML = Ti.UI.createLabel({
	    textAlign:'left',
		left:"50dp", top:"18dp",
	    font:{fontSize:"15dp"},
	    width:"150dp",
	    html:'<b>Shoppings</b><br>Se sua consulta é em uma unidade, fica próxima ao Shopping'
	});
	
	rowShop.add(labelLetterHTML);	
	
	//	Pushing Row
	tableData.push(rowShop);



//	Define TableRow BUTTON add


	var rowAction = Ti.UI.createTableViewRow({
	    className:'forumEvent',
	    height:"100dp"
	});


	//	Define & Add TableRow Childrens
	var buttonAction = Ti.UI.createButton({
	    backgroundImage: '/buttonoOk.png',
	    top: 9,
    	width: '56dp',
	    height: '56dp',
	    right:"16dp",
	    zIndex:9
	});
	
	buttonAction.addEventListener('click',function(e){
		 // var indexView = Alloy.createController("index",{}).getView();
		 Ti.App.fireEvent('update_appointments_counter', {});
		 Ti.App.fireEvent('clsAppntStack', {});
		 
	
	   
	});


	
	rowAction.add(buttonAction);
	

//	Pushing Row
tableData.push(rowAction);


//}// END LOOP


//	Define Table
var table = Ti.UI.createTableView({
  	data: tableData,
  	top:"65dp",
	left:"0px",
	color:"#6e6f71"
});


//	ADD objs to window
// win.add(buttonBack);
win.add(labelTitle);
win.add(table);
win.open();
