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
			" 	speciality.name as speciality_name" +
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
		'speciality_name': articlesRS.fieldByName('speciality_name')
	});
  articlesRS.next();
}
articlesRS.close();
db.close();

console.log(tableData);








win.open();