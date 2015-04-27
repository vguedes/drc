

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
	var icoCel = Ti.UI.createImageView({
	  image:'/iconPerson.png',
	  width:'27px',
	  height:'37px',
	  left:20
	});
	
	row.add(icoCel);
	
	var textFieldCel = Ti.UI.createTextField({
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#336699',
	  top: 10, left: 100,
	  width: 250, height: 60,
	  hintText:"Cel"
	});
	
	row.add(textFieldCel);
	
	var icoPerson = Ti.UI.createImageView({
	  image:'/icoPerson.png',
	  width:'27px',
	  height:'37px',
	  left:20
	});
	
	row.add(icoPerson);
	
	var textFieldPerson = Ti.UI.createTextField({
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#336699',
	  top: 10, left: 100,
	  width: 250, height: 60
	});
	
	row.add(textFieldPerson);

	

//	Pushing Row
tableData.push(row);


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
