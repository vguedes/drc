var args = arguments[0] || {};
var speciality_backend_id = args['speciality_backend_id'];
var clinic_backend_id = args['clinic_backend_id'];

//	Create & Define Window
Ti.UI.backgroundColor = 'white';
var win = Ti.UI.createWindow({
	 backgroundColor: 'white'
});

win.addEventListener("open", function() {
	win.activity.actionBar.hide();
});

Ti.App.addEventListener("clsAppntStack", function(data) {
	win.close();
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
	text:"3. Marque o dia e horário"
});

var labelSelect = Ti.UI.createLabel({
	width: "100%",
	height: "75px",
	color: "#fefffd",
	backgroundColor:"#ffffff",
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	top:"65",
	text:""
});

// Create & Define Picke/Selectbox
var picker1 = Ti.UI.createPicker({
  type:"Ti.UI.PICKER_TYPE_DATE",
  // minDate:"2014,4,1",
  // maxDate:"May 1, 2014 12:00:00",
  // value:"2014-04-15T12:00:00",
  top:50,
  zIndex:5,
  // backgroundColor: "#666666",
  // width:'100px',left:50
});

// var data = [];
// data[0]=Ti.UI.createPickerRow({title:'18 MAR'});
// data[1]=Ti.UI.createPickerRow({title:'19 MAR'});
// data[2]=Ti.UI.createPickerRow({title:'20 MAR'});
// data[3]=Ti.UI.createPickerRow({title:'30 MAR'});
// 
// picker1.add(data);
// picker1.selectionIndicator = true;


//rESULTS

var minDate = new Date();
minDate.setFullYear(2000);
minDate.setMonth(00);
minDate.setDate(01);

var maxDate = new Date();
maxDate.setFullYear(2020);
maxDate.setMonth(10);
maxDate.setDate(31);


var setValue = new Date();
setValue.setFullYear(2013);
setValue.setMonth(02);
setValue.setDate(24);


//	Define Date to Start drawnTable()
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd;
} 

if(mm<10) {
    mm='0'+mm;
} 

today = dd+'-'+mm+'-'+yyyy;

//	Define Data
function getDataJson(datetime){
	return '{"TIME":[{"time":"15:15","doctorId":"121","doctorName":"Dr(a).Mirela"}, {"time":"15:15","doctorId":"121","doctorName":"Dr(a).Mirela"}, {"time":"15:15","doctorId":"121","doctorName":"Dr(a).Mirela"}, {"time":"15:15","doctorId":"121","doctorName":"Dr(a).Mirela"}, {"time":"15:15","doctorId":"121","doctorName":"Dr(a).Mirela"}]}';
	
}

//Date picker
var picker = Ti.UI.createPicker({
	selectionIndicator:true,
	type:Ti.UI.PICKER_TYPE_DATE,
	minDate: minDate,
	maxDate: maxDate,
	value: setValue, visibleItems:2, useSpinner:false, 
	top:40,
	left:30,
	zIndex:6, width:240,height:130
});

var pickerLabel = Ti.UI.createLabel({
	top:70, color:"#ffffff",
	zIndex:15,  font:{fontSize:22},
	text:'Mar - 24 - 2013',visible:"false"
});
  
var bgPicker = Ti.UI.createLabel({
	width:"100%",
	height:"200px",
	backgroundColor:"#5090cd",
	top:"50px",
	zIndex:5
	
});


//	Define & Add TableRow Childrens
	var buttonAction = Ti.UI.createButton({
	    backgroundImage: '/buttonoOk1.png',
	    top: 80,
	    width: '62px',
	    height: '64px',
	    right:20,
	    zIndex:9
	});
	
	buttonAction.addEventListener('click',function(e){
		drawTable('');
	    picker.hide();
	    pickerLabel.show();
		buttonAction.hide();
	});


	pickerLabel.addEventListener('click',function(e){
	    picker.show();
	    pickerLabel.hide();
		buttonAction.show();
	});

	
	
	
//	Define border to separate table & title
var borderSeparatorTable = Ti.UI.createLabel({
		width:'100%',
		height:'1px',
		backgroundColor:'#cccccc',
		top:'140px',
		zIndex:5
});

//	Define Data /Parse JSON

//	Define Table
var table = Ti.UI.createTableView({
  	data: '',
  	top:"140px",
	left:"0px",
	color:"#6e6f71",
	top:180
});


//	Draw Table
function drawTable(datetime) {
	var dataJson = getDataJson(datetime);
//	var tablesData = table.data[0].rows;
	
	if (table.data[0]){
		var lengthData = table.data[0].rows; 

		//limpa rows
		 for (var i=table.data[0].rows.length;i>=0;i--){
	            table.deleteRow(i);
	    }
    
		
	}
	
    //insert novas rows do dataJson
	var tableJsonDataClean = dataJson;
  	var	tableJsonData = JSON.parse(tableJsonDataClean);

	var len = 0;
	for (var o in tableJsonData) {
	    len++;
	}

	
		console.log(len);
		
		
		
		
		 
	
	//	START LOOP INTO DATA ARRAY
for (var i=0; i<len; i++){
	console.log(i);
	
	//	Define data after parse
//	var rowData = tableJsonData[i];

	//	Define TableRow
	var row = Ti.UI.createTableViewRow({
	    className:'forumEvent'
	});

	
	//	Define first hour label
	var labelTime = Ti.UI.createLabel({
	    textAlign:'left',
	    top:55,
		left:7,
		width:'60px',
		color:'#666666',
	    font:{fontSize:12},
	    text:'15:00'
	});
	row.add(labelTime);
	
	//	Define Coaching Meet

	var heightCoach = 55;
	var lenSec = tableJsonData.TIME.length;
	
	for(ind=0; ind<lenSec; ind++){
		heightCoach = 55 + (35*ind);
			console.log('>>>'+heightCoach);
		var labelCoach = Ti.UI.createLabel({
		    textAlign:'left',
		    top:heightCoach,
			left:90,
			height:25,
			width:200,
			color:'#fefffd',
			backgroundColor:'#5090cd',
		    font:{fontSize:12},
		    text:'    15:15 - Dr(a). Mirela dos Santos',
		    borderRadius:4,
		    backgroundPaddingLeft: 30,
	    	backgroundPaddingRight: 30
		});
		
		labelCoach.addEventListener('click',function(e){
	    var modalConfirm = Ti.UI.createLabel({
		    textAlign:'left',
		    top:108,
			left:30,
			height:218,
			width:276,
			zIndex:11,
			backgroundColor:'#fafafa'
		});
		
		var labelModalTitle = Ti.UI.createLabel({
		    textAlign:'left',
		    top:128,
			left:50,
			color:'#868688',
			font:{fontSize:25},
			zIndex:12,
			text:'Confirmando'
		});
		
		var labelModalDesc = Ti.UI.createLabel({
		    textAlign:'left',
		    top:168,
			left:50,
			zIndex:12,
			color:'#868688',
			font:{fontSize:12},
			text: 'Sua consulta de ginecologista com a Dra.Mirela dos Santos será Quarta-Feira 11 de Fevereiro as 15:00hrs na clínica São Pedro.'
		});
		
		var labelModalEdit = Ti.UI.createLabel({
		    textAlign:'left',
		    zIndex:12,
		    top:258,
			left:90,
			color:'#868688',
			font:{fontSize:12},
			text: 'Alterar'
		});
		
		var labelModalConfirm = Ti.UI.createLabel({
		    textAlign:'left',
		    top:258,
		    zIndex:12,
			left:205,
			color:'#5090cd',
			font:{fontSize:12},
			text: 'Confirmar'
		});
		
		labelModalConfirm.addEventListener('click',function(e){
			var dadosPacienteView = Alloy.createController("dados_paciente",{}).getView();
		});
		
		labelModalEdit.addEventListener('click',function(e){
			win.remove(modalConfirm);
			win.remove(labelModalTitle);
			win.remove(labelModalDesc);
			win.remove(labelModalEdit);
			win.remove(labelModalConfirm);
		});
		
		win.add(modalConfirm);
		win.add(labelModalTitle);
		win.add(labelModalDesc);
		win.add(labelModalEdit);
		win.add(labelModalConfirm);
		
		
	
	});
		
		row.add(labelCoach);
		
	}
	

	
	
	
	
	
	
	

//	Pushing Row
table.appendRow(row);


}// END LOOP


}//end drawTable()

// DESENHA TABELA INICIAL
drawTable();	

//	ADD objs to window
win.add(buttonBack);
win.add(pickerLabel);  //pickerLabel.hide();
win.add(buttonAction);
win.add(borderSeparatorTable);
win.add(picker);
win.add(bgPicker);
win.add(labelTitle);
win.add(labelSelect);
win.add(table);
win.open();
