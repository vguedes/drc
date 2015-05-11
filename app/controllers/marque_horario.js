var args = arguments[0] || {};
var speciality_backend_id = args['speciality_backend_id'];
var clinic_backend_id = args['clinic_backend_id'];
var clinic_name = args['clinic_name'];
var speciality_name = args['speciality_name'];
var clinic_address = args['clinic_address'];

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
    backgroundImage: '/images/android/common/ic_arrow_back_white_24dp.png',
    top: 11,
    width: 36,
    height: 36,
    left:5,
    zIndex:99
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
	top:"0", font:{fontSize:18},zIndex:50,
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

//	Function FormatDate()
function FormatDate(dd,mm,yyyy){
	if(dd<10) {
	    dd='0'+dd;
	} 
	
	if(mm<10) {
	    mm='0'+mm;
	} 
	today = dd+'-'+mm+'-'+yyyy;
	
	return today;
}



//	Define Date to Start drawnTable()
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth(); //January is 0!
var yyyy = today.getFullYear();

if(dd<10) { dd='0'+dd;} 

if(mm<10) { mm='0'+mm;} 

today = dd+'-'+mm+'-'+yyyy;

var minDate = new Date();
minDate.setFullYear(yyyy);
minDate.setMonth(mm);
minDate.setDate(dd);

var maxDate = new Date();
maxDate.setFullYear(2016);
maxDate.setMonth(10);
maxDate.setDate(31);


var setValue = new Date();
setValue.setFullYear(yyyy);
setValue.setMonth(mm);
setValue.setDate(dd);


//	Define Data
function getDataJson(datetime){
	  return '{"09:00":[{"time":"09:00","doctorId":8164,"doctorName":"Enfermeiro Sacoma"},{"time":"09:00","doctorId":8221,"doctorName":"Enfermeiro Sao Bernardo"}],"10:00":[{"time":"10:00","doctorId":8164,"doctorName":"Enfermeiro Sacoma"}],"13:00":[{"time":"13:30","doctorId":8221,"doctorName":"Enfermeiro Sao Bernardo"}],"14:00":[{"time":"14:06","doctorId":8221,"doctorName":"Enfermeiro Sao Bernardo"},{"time":"14:42","doctorId":8221,"doctorName":"Enfermeiro Sao Bernardo"}],"15:00":[{"time":"15:18","doctorId":8221,"doctorName":"Enfermeiro Sao Bernardo"},{"time":"15:54","doctorId":8221,"doctorName":"Enfermeiro Sao Bernardo"}]}';


}

//Date picker
var picker = Ti.UI.createPicker({
	selectionIndicator:true,
	type:Ti.UI.PICKER_TYPE_DATE,
	minDate: minDate,
	maxDate: maxDate,
	value: setValue, visibleItems:2, useSpinner:false, 
	top:40,
	left:18,
	zIndex:6, width:240,height:130
});

var pickerLabel = Ti.UI.createLabel({
	top:70, color:"#ffffff",
	zIndex:15,  font:{fontSize:22},
	text:mm+' - '+dd +' - '+ yyyy,
	visible:"false"
});
  
var bgPicker = Ti.UI.createLabel({
	width:"100%",
	height:150,
	backgroundColor:"#5090cd",
	top:"50px",
	zIndex:5
	
});


//	Define & Add TableRow Childrens
	var buttonAction = Ti.UI.createButton({
	    backgroundImage: '/buttonoOk1.png',
	    top: 70,
	    width: '82px',
	    height: '84px',
	    right:15,
	    zIndex:9
	});
	
	buttonAction.addEventListener('click',function(e){
		// drawTable('');
	    picker.hide();
	    var pickerVal = picker.getValue();
	    
	    console.log(pickerVal);
	    pickerLabel.setText(FormatDate(pickerVal.getDate(),pickerVal.getMonth(),pickerVal.getFullYear()));
	    
	    pickerLabel.show();
		buttonAction.hide();
		var day = pickerVal.getDate().length == 2 ? pickerVal.getDate() : '0' + pickerVal.getDate();
		var month = pickerVal.getMonth().length == 2 ? pickerVal.getMonth() : '0' + pickerVal.getMonth();
		var year = pickerVal.getFullYear();
		getAvailableSlots(day + '-' + month + '-' + year);
		
		//drawTable(datetime)
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


// get the available slots
function getAvailableSlots(today) {
    today = '22-05-2015';
    console.log(today);
    
    
    
    
    var base_url = 'https://escaladev.drconsulta.com';
    var auth_method = '/authenticate';
    var getAvailableSlots_method = '/schedule/availableslots';
    var auth_params = {
        'username': 'gaston',
        'password': '098765',
        'grant_type':  'password'
    };


    var client = Ti.Network.createHTTPClient({
         onload : function(e) {
             var token = JSON.parse(this.responseText).access_token;
             console.info(token);
             var xhr = Ti.Network.createHTTPClient({
                onload: function(e)  {
                    var rtrn = {};
                    var hoursStack = [];
                    var results = JSON.parse(this.responseText).groupedResults;
                    console.log(results);
                    for(var k=0,v=results.length; k<v; k++) {
                       var groups = results[k]['openSlots'];
                       for(var a=0,b=groups.length; a<b; a++){
                         var slot = groups[a];
                         console.log(slot);
                         var apptMedicalName = slot['medicalName'];
                         var apptMedicalCrm = slot['medicalCrm'];
                         var apptPrice = slot['price'];
                         var apptMedicalId = slot['medicalId'];
                         var apptTime = slot['dateTime']["time"];
                         var apptHour = apptTime.split(":")[0];
                         var apptMinute = apptTime.split(":")[1];
                         var apptBaseTime = apptHour + ":00";
                         if (! (apptBaseTime in rtrn)) {
                            rtrn[apptBaseTime] = [];
                         };
                         rtrn[apptBaseTime].push({
                            'time': apptTime,
                            'doctorId': apptMedicalId,
                            'doctorName': apptMedicalName,
                            'doctorCrm': apptMedicalCrm,
                            'price': apptPrice
                         });
                         console.log('pushed -> ' + apptMedicalName);
                       };
                     };
                     drawTable(rtrn);
                      win.remove(modalLoad);
                },
                onerror: function(e) {
                    alert('error');
                    win.remove(modalLoad);
                },
                timeout: 10000
             });
             var params = {
                'startDate': today,
                'serviceId': '4375',
                'totalDays': '0',
                'groupBy': 'UNIT'
             };
             xhr.open("GET", base_url + getAvailableSlots_method);
             xhr.setRequestHeader('Authorization', 'Bearer '  + token);
             xhr.send(params);
         },
         // function called when an error occurs, including a timeout
         onerror : function(e) {
             Ti.API.debug(e.error);
             alert('Erro: ' + e.error);
         },
         timeout : 10000  // in milliseconds
    });
    
     var modalLoad = Ti.UI.createLabel({
		    textAlign:'left',
		    top:0,
			left:0,
			height:"100%",
			width:"100%",
			zIndex:11,
			backgroundColor:'#000000',
			opacity:0.5,textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
			text:"Aguarde...", color:"#ffffff"
		});
		
		win.add(modalLoad);
    
    
    
    
    client.open("POST", base_url + auth_method);
    client.send(auth_params);
};



//	Draw Table
function drawTable(tableJsonData) {
	// var dataJson = getDataJson(datetime);
//	var tablesData = table.data[0].rows;
	
	if (table.data[0]){
		var lengthData = table.data[0].rows; 

		//limpa rows
		 for (var i=table.data[0].rows.length;i>=0;i--){
	            table.deleteRow(i);
	    }
    
		
	}
	
    //insert novas rows do dataJson
	// var tableJsonDataClean = dataJson;
  	// var	tableJsonData = JSON.parse(tableJsonDataClean);

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
	    text: Object.keys(tableJsonData)[i]
	});
	
	var nowTime = Object.keys(tableJsonData)[i];
	row.add(labelTime);
	
	//	Define Coaching Meet

	var heightCoach = 55;
	var lenSec = tableJsonData[Object.keys(tableJsonData)[i]].length;
	
	
	for(ind=0; ind<lenSec; ind++){
		var dataL = tableJsonData[Object.keys(tableJsonData)[i]][ind];
		heightCoach = 55 + (35*ind);
			console.log('>>>'+heightCoach);
		var labelCoach = Ti.UI.createLabel({
		    textAlign:'left',
		    top:heightCoach,
			left:90,
			// height:25,
			width:200,
			color:'#fefffd',
			backgroundColor:'#5090cd',
		    font:{fontSize:12},
		    text:'    '+dataL.time+' - Dr(a). '+dataL.doctorName,
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
		
		var pickerVal = picker.getValue();
		
		var labelModalDesc = Ti.UI.createLabel({
		    textAlign:'left',
		    top:168,
			left:50,
			zIndex:12, width:210,
			color:'#868688',
			font:{fontSize:12},
			text: 'Sua consulta de '+speciality_name+' com Dr(a) '+dataL.doctorName+' será '+FormatDate(pickerVal.getDate(),pickerVal.getMonth(),pickerVal.getFullYear())+' as '+nowTime+'hrs na clínica '+clinic_name+'.'
		});
		
		var labelModalEdit = Ti.UI.createLabel({
		    textAlign:'left',
		    zIndex:12,
		    top:258,
			left:90,
			color:'#868688',
			font:{fontSize:15},
			text: 'Alterar'
		});
		
		var labelModalConfirm = Ti.UI.createLabel({
		    textAlign:'left',
		    top:258,
		    zIndex:12,
			left:205,
			color:'#5090cd',
			font:{fontSize:15},
			text: 'Confirmar'
		});
		
		labelModalConfirm.addEventListener('click',function(e){
			win.remove(modalConfirm);
			win.remove(labelModalTitle);
			win.remove(labelModalDesc);
			win.remove(labelModalEdit);
			win.remove(labelModalConfirm);
			
			var pickerVal =  picker.getValue();
			
			var especialidade = speciality_name;
			var doutor = dataL.doctorName;
			var doutorId = dataL.doctorId;
			var doutorCrm = dataL.doctorCrm;
			var preco = dataL.price;
			var data = pickerVal.getDate()+' - '+pickerVal.getMonth() +' - '+ pickerVal.getFullYear();
			var horario = nowTime;
			var clinica = clinic_name;
			var endereco_clinica = clinic_address;
			
			var dadosPacienteView = Alloy.createController("dados_paciente",{
				"especialidade": especialidade,
				"doutor": doutor,
				"doutorId": doutorId,
				"doutorCrm": doutorCrm,
				"data":data,
				"horario":horario,
				"clinica":clinica,
				"endereco_clinica": endereco_clinica,
				"preco": preco
			}).getView();
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
getAvailableSlots(today);	

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
