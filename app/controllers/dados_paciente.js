var args = arguments[0] || {};

			var especialidade = args['especialidade'];
			var doutorId = args['doutorId'];
			var doutor = args['doutor'];
			var doutorCrm = args['doutorCrm'];
			var preco = args['preco'];
			var data = args['data'];
			var horario = args['horario'];
			var clinica = args['clinica'];
			var endereco_clinica = args['endereco_clinica'];
			var slotId = args['slotId'];
			var speciality_backend_id = args['speciality_backend_id'];

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
// Create & Define BackButton
var clickable_area = Ti.UI.createView({
    top: 5,
    width: 48,
    height: 48,
    left:"5dp",
    zIndex:99
});

var backArrow = Ti.UI.createImageView({
  backgroundImage: '/images/android/common/ic_arrow_back_white_24dp.png',
    width: 24,
    height: 24,touchEnabled: false,
    left:"14dp",
    zIndex:99
});

clickable_area.add(backArrow);

clickable_area.addEventListener('click', function(e){
	win.close();
});

//	Create & Define Title Label
var labelTitle = Ti.UI.createLabel({
	width: "100%",
	height: 56,
	color: "#fefffd", font:{fontSize:"20dp",fontWeight:'bold'},
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
	    height:"72dp",
	    // backgroundColor: "#9a9a9a"
	});


	//	Define & Add TableRow Childrens
	var icoPerson = Ti.UI.createImageView({
	  image:'/iconPerson.png',
	  width:'24dp',
	  // height:'37px',
	  left:"16dp",
	  // top:10
	});
	
	row.add(icoPerson);
	
	
	
	var CPFLabel= Ti.UI.createLabel({
		width: Ti.UI.SIZE,
		height: Ti.UI.SIZE,
		// backgroundColor:'#cccccc',
		left: "72dp", 
		top: "5dp",
		text: "CPF",
		font:{fontSize:"16SP"},
		color: '#336699',
	});
	
	row.add(CPFLabel);

	
	
	
	var borderSeparator = Ti.UI.createLabel({
		width:'100%',
		height:'1px',
		backgroundColor:'#cccccc',
		left: 50, width: 250, 
		bottom: 0
	});
	
	// row.add(borderSeparator);
	
	var textFieldCpf = Ti.UI.createTextField({
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#336699',
	  bottom:"5dp",
	  left: "72dp",
	  width: 250, height: 60,
	  hintText:"CPF",
	  verticalAlign: Titanium.UI.TEXT_VERTICAL_ALIGNMENT_BOTTOM,
	  font:{fontSize:"14SP"}
	});
	
	row.add(textFieldCpf);	
	
//	Pushing Row
tableData.push(row);

	//	Define TableRow CEL
	var rowCel = Ti.UI.createTableViewRow({
	    className:'forumEvent',
	    height:"72dp"
	});


	//	Define & Add TableRow Childrens
	var icoCel = Ti.UI.createImageView({
	  image:'/iconCel.png',
	  width:'24dp',
	  left:"16dp",
	});
	
	rowCel.add(icoCel);
	
	
	var CellLabel= Ti.UI.createLabel({
		width: Ti.UI.SIZE,
		height: Ti.UI.SIZE,
		// backgroundColor:'#cccccc',
		left: "72dp", 
		top: "5dp",
		text: "Celular",
		font:{fontSize:"16SP"},
		color: '#336699',
	});
	
	rowCel.add(CellLabel);

	
	
	
	
	var borderSeparator = Ti.UI.createLabel({
		width:'100%',
		height:'1px',
		backgroundColor:'#cccccc',
		left: 50, width: 250, 
		top:44
	});
	
	// rowCel.add(borderSeparator);
	
	var textFieldCel = Ti.UI.createTextField({
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#336699',
	  bottom:"5dp",
	  left: "72dp",
	  width: 250, height: 60,
	  hintText:"Celular",
	  verticalAlign: Titanium.UI.TEXT_VERTICAL_ALIGNMENT_BOTTOM,
	  font:{fontSize:"14SP"}
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
		
		var valid = true;
		var cpf = textFieldCpf.value;
		var cel = textFieldCel.value;
		
		
		if (cel.length != 11) {
			valid = false;
			alert('Digite o celular com ddd somente números');
		};
		if (cpf.length != 11) {
			valid = false;
			alert('Digite o cpf somente números');
		};
		
		
		if (valid) {
		    var confirmaDadosView = Alloy.createController("conf_dados_paciente",{
		    	"tel":textFieldCel.getValue(),
		    	"cpf":textFieldCpf.getValue(),
		    	"especialidade": especialidade,
		    	"doutorId": doutorId,
				"doutor": doutor,
				"doutorCrm": doutorCrm,
				"data":data,
				"horario":horario,
				"clinica":clinica,
				"endereco_clinica":endereco_clinica,
				"preco": preco,
				"slotId": slotId,
				"speciality_backend_id": speciality_backend_id,
		    }).getView();
		    
	    };
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
win.add(clickable_area);



win.add(labelTitle);
win.add(table);
win.open();
