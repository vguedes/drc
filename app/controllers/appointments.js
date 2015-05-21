Ti.UI.backgroundColor = 'white';
var win = Ti.UI.createWindow({
	 backgroundColor: '#FFF',
	 layout: "vertical"
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
	left: "72dp",zIndex:999, text:"Consultas e exames marcados"
});

viewTitle.add(clickable_area);
viewTitle.add(labelTitleText);
win.add(viewTitle);


var tableData = [];
var db = Ti.Database.open('_alloy_');
var query = " SELECT" +
			"	appointments.id as appt_id," +
			" 	appointments.date_time as appt_date_time," +
			" 	clinic.name as clinic_name," +
			" 	speciality.name as speciality_name," +
			"	speciality.icon as speciality_icon" +
			" FROM" +
			" 	appointments" +
			" INNER JOIN" +
			" 	clinic" +
			" ON" +
			" 	appointments.clinic_id = clinic.id" +
			" INNER JOIN" +
			" 	speciality" +
			" ON" +
			" 	appointments.speciality_id = speciality.id;";
var articlesRS = db.execute(query);
while (articlesRS.isValidRow()) {
	tableData.push({
		'appt_id': articlesRS.fieldByName('appt_id'),
		'appt_date_time': new Date(articlesRS.fieldByName('appt_date_time')),
		'clinic_name': articlesRS.fieldByName('clinic_name'),
		'speciality_name': articlesRS.fieldByName('speciality_name'),
		'speciality_icon': articlesRS.fieldByName('speciality_icon')
	});
  articlesRS.next();
}
articlesRS.close();
db.close();

console.log(tableData);


var apptTable = Ti.UI.createTableView({
	width: Ti.UI.FILL,
	height: Ti.UI.FILL,
	top: "8dp"
});
win.add(apptTable);

for(var i=0,j=tableData.length; i<j; i++){
  var appt = tableData[i];
  // Formatting date_time
  var days = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];
  var months = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];
  var appt_day = days[appt.appt_date_time.getDay()];
  var appt_month = months[appt.appt_date_time.getMonth()];
  var appt_year = appt.appt_date_time.getFullYear();
  var appt_time = appt.appt_date_time.getUTCHours() + ":" + appt.appt_date_time.getUTCMinutes(); 
  var appt_date_time = appt_day + " " + appt.appt_date_time.getDate() + " " + appt_month + " " + appt_time;
  
  // Row
  var r = Ti.UI.createTableViewRow({
  	height: "88dp"
  });
  // Icon
  var speciality_icon = Ti.UI.createImageView({
  	// top: "18dp",
  	left: "16dp",
  	width: "24dp",
  	height: "24dp",
  	image: appt.speciality_icon
  });
  r.add(speciality_icon);
  // View for text
  var labels_view = Ti.UI.createView({
  	height: "88dp",
  	right: "16dp",
  	left: "72dp",
  	layout: "vertical"
  });
  // Speciality
  var speciality_label = Ti.UI.createLabel({
  	color: "#868686",
  	top: "16dp",
  	left: 0,
  	font: {
  		fontSize: "20dp"
  	},
  	textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  	text: appt.speciality_name
  });
  labels_view.add(speciality_label);
  // Data
  var datetime_label = Ti.UI.createLabel({
  	color: "#868686",
  	left: 0,
  	font: {
  		fontSize: "14dp"
  	},
  	textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  	text: appt_date_time
  });
  labels_view.add(datetime_label);
  // Clinic
  var clinic_label = Ti.UI.createLabel({
  	color: "#868686",
  	left: 0,
  	font: {
  		fontSize: "14dp"
  	},
  	textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
  	text: "CLÍNICA " + appt.clinic_name
  });
  labels_view.add(clinic_label);
  r.add(labels_view);
  
  apptTable.appendRow(r);
  
};





win.open();