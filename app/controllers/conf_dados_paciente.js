var args = arguments[0] || {};
var cpf = args['cpf'];
var tel = args['tel'];


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
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	top:"0", font:{fontSize:18},
	text:"5. Confirme os dados"
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
	    className:'forumEvent',
	    height:50
	});


	//	Define & Add TableRow Childrens
	var icoPerson = Ti.UI.createImageView({
	  image:'/iconPerson.png',
	  width:'27px',
	  height:'37px',
	  left:20,
	  top:30
	});
	
	row.add(icoPerson);
	
	var borderSeparator = Ti.UI.createLabel({
		width:'100%',
		height:'1px',
		backgroundColor:'#cccccc',
		left: 50, width: 250, 
		top:48
	});
	
	row.add(borderSeparator);
	
	var textFieldCel = Ti.UI.createTextField({
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#336699',
	  top:16,left: 40,
	  width: 250, height: 50,
	  hintText:cpf,
	  font:{fontSize:12}
	});
	
	row.add(textFieldCel);	
	
	var labelLetter = Ti.UI.createLabel({
	    textAlign:'left',
		left:50,
	    font:{fontSize:12},
	    width:150,
	    text:'CPF'
	});
	
	row.add(labelLetter);	
	
//	Pushing Row
tableData.push(row);

	//	Define TableRow cel
	var rowCel = Ti.UI.createTableViewRow({
	    className:'forumEvent',
	    height:50
	});


	//	Define & Add TableRow Childrens
	var icoPerson = Ti.UI.createImageView({
	  image:'/iconPerson.png',
	  width:'27px',
	  height:'37px',
	  left:20,
	  top:30
	});
	
	rowCel.add(icoPerson);
	
	var borderSeparator = Ti.UI.createLabel({
		width:'100%',
		height:'1px',
		backgroundColor:'#cccccc',
		left: 50, width: 250, 
		top:48
	});
	
	rowCel.add(borderSeparator);
	
	var textFieldCel = Ti.UI.createTextField({
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#336699',
	  top:16,left: 40,
	  width: 250, height: 50,
	  hintText:tel,
	  font:{fontSize:12}
	});
	
	rowCel.add(textFieldCel);	
	
	var labelLetter = Ti.UI.createLabel({
	    textAlign:'left',
		left:50,
	    font:{fontSize:12},
	    width:150,
	    text:'CELULAR'
	});
	
	rowCel.add(labelLetter);	
	
//	Pushing Row
tableData.push(rowCel);

	//	Define TableRow Nome
	var rowNome = Ti.UI.createTableViewRow({
	    className:'forumEvent',
	    height:50
	});


	//	Define & Add TableRow Childrens
	var icoPerson = Ti.UI.createImageView({
	  image:'/iconPerson.png',
	  width:'27px',
	  height:'37px',
	  left:20,
	  top:30
	});
	
	rowNome.add(icoPerson);
	
	var borderSeparator = Ti.UI.createLabel({
		width:'100%',
		height:'1px',
		backgroundColor:'#cccccc',
		left: 50, width: 250, 
		top:48
	});
	
	rowNome.add(borderSeparator);
	
	var textFieldCel = Ti.UI.createTextField({
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#336699',
	  top:16,left: 40,
	  width: 250, height: 50,
	  hintText:"Digite seu nome",
	  font:{fontSize:12}
	});
	
	rowNome.add(textFieldCel);	
	
	var labelLetter = Ti.UI.createLabel({
	    textAlign:'left',
		left:50,
	    font:{fontSize:12},
	    width:150,
	    text:'NOME'
	});
	
	rowNome.add(labelLetter);	
	
//	Pushing Row
tableData.push(rowNome);

	//	Define TableRow Email
	var rowEmail = Ti.UI.createTableViewRow({
	    className:'forumEvent',
	    height:50
	});


	//	Define & Add TableRow Childrens
	var icoPerson = Ti.UI.createImageView({
	  image:'/iconPerson.png',
	  width:'27px',
	  height:'37px',
	  left:20,
	  top:30
	});
	
	rowEmail.add(icoPerson);
	
	var borderSeparator = Ti.UI.createLabel({
		width:'100%',
		height:'1px',
		backgroundColor:'#cccccc',
		left: 50, width: 250, 
		top:48
	});
	
	rowEmail.add(borderSeparator);
	
	var textFieldCel = Ti.UI.createTextField({
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#336699',
	  top:16,left: 40,
	  width: 250, height: 50,
	  hintText:"Digite seu e-mail",
	  font:{fontSize:12}
	});
	
	rowEmail.add(textFieldCel);	
	
	var labelLetter = Ti.UI.createLabel({
	    textAlign:'left',
		left:50,
	    font:{fontSize:12},
	    width:150,
	    text:'E-MAIL'
	});
	
	rowEmail.add(labelLetter);	
	
//	Pushing Row
tableData.push(rowEmail);

	//	Define TableRow Nascimento
	var rowNasc = Ti.UI.createTableViewRow({
	    className:'forumEvent',
	    height:50
	});


	//	Define & Add TableRow Childrens
	var icoPerson = Ti.UI.createImageView({
	  image:'/iconPerson.png',
	  width:'27px',
	  height:'37px',
	  left:20,
	  top:30
	});
	
	rowNasc.add(icoPerson);
	
	var borderSeparator = Ti.UI.createLabel({
		width:'100%',
		height:'1px',
		backgroundColor:'#cccccc',
		left: 50, width: 250, 
		top:48
	});
	
	rowNasc.add(borderSeparator);
	
	var textFieldCel = Ti.UI.createTextField({
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#336699',
	  top:16,left: 40,
	  width: 250, height: 50,
	  hintText:"Digite seu ano de nascimento",
	  font:{fontSize:12}
	});
	
	rowNasc.add(textFieldCel);	
	
	var labelLetter = Ti.UI.createLabel({
	    textAlign:'left',
		left:50,
	    font:{fontSize:12},
	    width:150,
	    text:'NASCIMENTO'
	});
	
	rowNasc.add(labelLetter);	
	
//	Pushing Row
tableData.push(rowNasc);




	
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
	    var consultaMarcadaView = Alloy.createController("consulta_marcada",{
	    	"especialidade": especialidade,
			"doutor": doutor,
			"data":data,
			"horario":horario,
			"clinica":clinica
	    }).getView();
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
