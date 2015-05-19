var args = arguments[0] || {};
var speciality_backend_id = args['speciality_backend_id'];
console.log(speciality_backend_id, '---------------------------    speciality_backend_id em selecione_clinica');
var speciality_name = args['speciality_name'];

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
	left: "72dp",zIndex:999, text:"2.Selecione uma clínica"
});



viewTitle.add(labelTitleText);
viewTitle.add(clickable_area);




var tableData = [];
var tableDataCompleted = [];


var db = Ti.Database.open('_alloy_');
var query = 'SELECT * FROM clinic ORDER BY name';
var articlesRS = db.execute(query);
while (articlesRS.isValidRow()) {
	tableData.push({
		'id': articlesRS.fieldByName('id'),
		'backend_id': articlesRS.fieldByName('backend_id'),
		'name': articlesRS.fieldByName('name'),
		'address': articlesRS.fieldByName('address')
	});
  articlesRS.next();
}
articlesRS.close();
db.close();


console.log(tableData);


//	Define Data /Parse JSON
var tableDataLength = tableData.length;

//	START LOOP INTO DATA ARRAY
for (var i=1; i<tableDataLength; i++){
	console.log(tableDataLength);
	//	Define data after parse
	var rowData = tableData[i];

	//	Define TableRow
	var row = Ti.UI.createTableViewRow({
	    className:'forumEvent',
	    height:"72dp"
	});


	//	Define & Add TableRow Childrens
	var labelClinic = Ti.UI.createLabel({
	    textAlign:'left',
	    top:"8dp",
		left:"16dp",
		color: "#191819",
	    font:{fontSize:"16dp"},
	    clinic_backend_id:rowData.backend_id,
	    clinic_address:rowData.address,
	    touchEnabled:false,
	    text:rowData.name
	});
	
	row.add(labelClinic);
	
	var labelClinicDetail = Ti.UI.createLabel({
	    textAlign:'left',
		left:"16dp",
		top:"28dp",
		width:"90%",
		color: "#7c7c7c",
	    font:{fontSize:"14dp"},
	    touchEnabled:false,
	    text:rowData.address
	});
	
	row.add(labelClinicDetail);
	
	// var labelDistance = Ti.UI.createLabel({
	    // textAlign:'right',
		// right:15,
	    // font:{fontSize:10},
	    // text:'1,7km'
	// });
// 	
	// row.add(labelDistance);


	
	
	//	LISTENERS NAVIGATE
	row.addEventListener('click',function(e){
		var clinic_backend_id = e.source.children[0].clinic_backend_id;
		var clinic_address = e.source.children[0].clinic_address;
		var clinic_name = e.source.children[0].text;
		
	    var marqueHorarioView = Alloy.createController("marque_horario",{
	    	'speciality_backend_id': speciality_backend_id,
	    	'speciality_name': speciality_name,
	    	'clinic_backend_id': clinic_backend_id,
	    	'clinic_name':clinic_name,
	    	'clinic_address': clinic_address
	    }).getView();
	    
	});

//	Pushing Row
tableDataCompleted.push(row);


}// END LOOP


//	Define Table
var table = Ti.UI.createTableView({
  	data: tableDataCompleted,
  	top:"72dp",
	left:"0",
	color:"#6e6f71"
});


//	ADD objs to window

win.add(viewTitle);
win.add(table);
win.open();
