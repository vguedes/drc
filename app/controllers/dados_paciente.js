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
	color: "#fefffd", font:{fontSize:18},
	backgroundColor:"#5090cd",
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	top:"0",
	text:"4. Dados do paciente"
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
	  top:10
	});
	
	row.add(icoPerson);
	
	var borderSeparator = Ti.UI.createLabel({
		width:'100%',
		height:'1px',
		backgroundColor:'#cccccc',
		left: 50, width: 250, 
		top:44
	});
	
	row.add(borderSeparator);
	
	var textFieldCpf = Ti.UI.createTextField({
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#336699',
	  top:0,left: 50,
	  width: 250, height: 60,
	  hintText:"CPF",
	  font:{fontSize:14}
	});
	
	row.add(textFieldCpf);	
	
//	Pushing Row
tableData.push(row);

	//	Define TableRow CEL
	var rowCel = Ti.UI.createTableViewRow({
	    className:'forumEvent',
	    height:50
	});


	//	Define & Add TableRow Childrens
	var icoCel = Ti.UI.createImageView({
	  image:'/iconCel.png',
	  width:'27px',
	  height:'37px',
	  left:20
	});
	
	rowCel.add(icoCel);
	
	var borderSeparator = Ti.UI.createLabel({
		width:'100%',
		height:'1px',
		backgroundColor:'#cccccc',
		left: 50, width: 250, 
		top:44
	});
	
	rowCel.add(borderSeparator);
	
	var textFieldCel = Ti.UI.createTextField({
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#336699',
	  top:0,
	  left: 50,
	  width: 250, height: 60,
	  hintText:"CELULAR",
	   font:{fontSize:14}
	});
	
	rowCel.add(textFieldCel);	
	
//	Pushing Row
tableData.push(rowCel);

//	Define TableRow BUTTON add


	var rowAction = Ti.UI.createTableViewRow({
	    className:'forumEvent',
	    height:100
	});


	//	Define & Add TableRow Childrens
	var buttonAction = Ti.UI.createButton({
	    backgroundImage: '/buttonGo.png',
	    top: 9,
	    width: '102px',
	    height: '104px',
	    right:15,
	    zIndex:9
	});
	
	buttonAction.addEventListener('click',function(e){
		console.log(textFieldCpf.getValue());
	    var confirmaDadosView = Alloy.createController("conf_dados_paciente",{
	    	"tel":textFieldCel.getValue(),
	    	"cpf":textFieldCpf.getValue(),
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
