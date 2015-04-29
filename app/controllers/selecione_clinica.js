var args = arguments[0] || {};

//	Create & Define Window
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
	text:"2. Selecione a clínica"
});


//	Define Data /Parse JSON
var tableData = [];
var tableJsonDataClean = '{"consultas":[{"title":"Almoço"},{"title":"Almoço"},{"title":"Almoço"},{"title":"Almoço"},{"title":"Almoço"},{"title":"Almoço"},{"title":"Almoço"},{"title":"Almoço"},{"title":"Almoço"},{"title":"Almoço"},{"title":"Almoço"},{"title":"Beirute"},{"title":"Beirute"},{"title":"Beirute"},{"title":"Beirute"},{"title":"Beirute"},{"title":"Beirute"},{"title":"Beirute"},{"title":"Caldo de Cana"},{"title":"Caldo de Cana"},{"title":"Caldo de Cana"},{"title":"Caldo de Cana"},{"title":"Caldo de Cana"},{"title":"Caldo de Cana"},{"title":"Caldo de Cana"},{"title":"Caldo de Cana"},{"title":"Caldo de Cana"},{"title":"Caldo de Cana"}]}';
var	tableJsonData = JSON.parse(tableJsonDataClean);
	
var tableDataLength = tableJsonData.consultas.length;

var letters = [];

//	START LOOP INTO DATA ARRAY
for (var i=1; i<tableDataLength; i++){
	
	//	Define data after parse
	var rowData = tableJsonData.consultas[i];

	//	Define TableRow
	var row = Ti.UI.createTableViewRow({
	    className:'forumEvent',
	    height:50
	});


	//	Define & Add TableRow Childrens
	var labelClinic = Ti.UI.createLabel({
	    textAlign:'left',
	    top:8,
		left:15,
	    font:{fontSize:12},
	    text:'Sacomã'
	});
	
	row.add(labelClinic);
	
	var labelClinicDetail = Ti.UI.createLabel({
	    textAlign:'left',
		left:15,
		top:20,
	    font:{fontSize:12},
	    text:'Próxima ao terminal Sacomã'
	});
	
	row.add(labelClinicDetail);
	
	var labelDistance = Ti.UI.createLabel({
	    textAlign:'right',
		right:15,
	    font:{fontSize:10},
	    text:'1,7km'
	});
	
	row.add(labelDistance);
	
	var borderSeparator = Ti.UI.createLabel({
		width:'100%',
		height:'1px',
		backgroundColor:'#cccccc',
		top:49
	});
	
	row.add(borderSeparator);

	
	
	//	LISTENERS NAVIGATE
	row.addEventListener('click',function(e){
	    var marqueHorarioView = Alloy.createController("marque_horario",{}).getView();
	});

//	Pushing Row
tableData.push(row);


}// END LOOP


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
