var args = arguments[0] || {};
var speciality_backend_id = args['speciality_backend_id'];
var speciality_id = args['speciality_id'];
console.log(speciality_backend_id, 'speciality_backend_id em marque_horario');
var speciality_name = args['speciality_name'];
var clinic_id = args['clinic_id'];
var clinic_name = args['clinic_name'];
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
var clickable_area = Ti.UI.createView({
    top: "5dp",
    width: "48dp",
    height: "48dp",
    left:"5dp",
    zIndex:99
});

var backArrow = Ti.UI.createImageView({
  backgroundImage: '/images/android/common/ic_arrow_back_white_24dp.png',
    width: "24dp",
    height: "24dp",touchEnabled: false,
    left:"14dp",
    zIndex:99
});

clickable_area.add(backArrow);

clickable_area.addEventListener('click', function(e){
	win.close();
});


//	Create & Define Title Label
var labelTitle = Ti.UI.createLabel({
	height: "56dp", left:"72dp",
	color: "#fefffd",
	backgroundColor:"#5090cd",
	top:"0", font:{fontSize:"20dp", fontWeight:"bold"},zIndex:50,
	text:"3. Marque o dia e horário"
});

var labelSelect = Ti.UI.createLabel({
	width: "100%",
	height: "75dp",
	color: "#fefffd",
	backgroundColor:"#ffffff",
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	top:"65dp",
	text:""
});

// Create & Define Picke/Selectbox
var picker1 = Ti.UI.createPicker({
  type:"Ti.UI.PICKER_TYPE_DATE",
  top:"50dp",
  zIndex:5
});



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
var mm = today.getMonth()+1; //January is 0!
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
setValue.setMonth(mm-1);
setValue.setDate(dd);


//	Define Data
function getDataJson(datetime){
	  return '{"09:00":[{"time":"09:00","doctorId":8164,"doctorName":"Enfermeiro Sacoma"},{"time":"09:00","doctorId":8221,"doctorName":"Enfermeiro Sao Bernardo"}],"10:00":[{"time":"10:00","doctorId":8164,"doctorName":"Enfermeiro Sacoma"}],"13:00":[{"time":"13:30","doctorId":8221,"doctorName":"Enfermeiro Sao Bernardo"}],"14:00":[{"time":"14:06","doctorId":8221,"doctorName":"Enfermeiro Sao Bernardo"},{"time":"14:42","doctorId":8221,"doctorName":"Enfermeiro Sao Bernardo"}],"15:00":[{"time":"15:18","doctorId":8221,"doctorName":"Enfermeiro Sao Bernardo"},{"time":"15:54","doctorId":8221,"doctorName":"Enfermeiro Sao Bernardo"}]}';
}

//Date picker
var picker = Ti.UI.createPicker({
	selectionIndicator:true,
	type:Ti.UI.PICKER_TYPE_DATE,
	minDate: setValue,
	// maxDate: maxDate,
	value: setValue, visibleItems:2, useSpinner:false, 
	top:"40dp",
	left:"18dp",
	zIndex:6, width:"243dp",height:"150dp"
});

var pickerLabel = Ti.UI.createLabel({
	top:"70dp", color:"#ffffff",
	zIndex:15,  font:{fontSize:"22dp"},
	text:mm+' - '+dd +' - '+ yyyy,
	visible:"false"
});
  
var bgPicker = Ti.UI.createLabel({
	width:"100%",
	height:"200dp",
	backgroundColor:"#5090cd",
	top:"0dp",
	zIndex:5
	
});


//	Define & Add TableRow Childrens
	var buttonAction = Ti.UI.createButton({
	    backgroundImage: '/buttonoOk1.png',
	    top: "70dp",
	    width: '56dp',
	    height: '56dp',
	    right:"16dp",
	    zIndex:9
	});
	
	buttonAction.addEventListener('click',function(e){
		// drawTable('');
	    picker.hide();
	    var pickerVal = picker.getValue();
	    
	    pickerLabel.setText(FormatDate(pickerVal.getDate(),pickerVal.getMonth()+1,pickerVal.getFullYear()));
	    
	    pickerLabel.show();
		buttonAction.hide();
		var day = pickerVal.getDate() > 9 ? pickerVal.getDate() : '0' + pickerVal.getDate();
		var month = pickerVal.getMonth() + 1;
		month = month > 9 ? month : '0' + month;
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
		top:'140dp',
		zIndex:5
});

//	Define Data /Parse JSON

//	Define Table
var table = Ti.UI.createTableView({
  	data: '',
  	top:"140dp",
	left:"0dp",
	color:"#6e6f71",
	top:"180dp"
});


// get the available slots
function getAvailableSlots(today) {
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
                    for(var k=0,v=results.length; k<v; k++) {
                       var groups = results[k]['openSlots'];
                       for(var a=0,b=groups.length; a<b; a++){
                         var slot = groups[a];
                         var apptSlotId = slot['id'];
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
                            'price': apptPrice,
                            'slotId': apptSlotId
                         });
                         console.log('pushed -> ' + apptMedicalName);
                       };
                     };
                     drawTable(rtrn);
                      win.remove(modalLoad);
                },
                onerror: function(e) {
                	win.remove(modalLoad);
                    alert('error');
                },
                timeout: 10000
             });
             var params = {
                'startDate': today,
                //TODO deixar passar o serviceId
                'serviceId': speciality_backend_id,
                'totalDays': '0',
                'groupBy': 'UNIT'
             };
             xhr.open("GET", base_url + getAvailableSlots_method);
             xhr.setRequestHeader('Authorization', 'Bearer '  + token);
             xhr.send(params);
         },
         // function called when an error occurs, including a timeout
         onerror : function(e) {
         	win.remove(modalLoad);
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
			backgroundColor:'#000000',zIndex:999,
			opacity:0.5,textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
			text:"Aguarde...", color:"#ffffff", font:{fontSize:"16dp"}
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
		 	console.log("Deletanto " + i);
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


var slotId = false;
var doctorName = false;
var doctcorId = false;
var doctorCrm = false;
var apptTime = false;
var price = false;



	//	START LOOP INTO DATA ARRAY
for (var i=0; i<len; i++){
	
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
		
			console.log('======== OBJ ========');
			console.log(dataL.slotId, '  slotId');
			console.log(dataL.doctorId, '  doctorId');
			console.log(dataL.doctorName, '  doctorName');
			console.log(dataL.doctorCrm, '  doctorCrm');
			console.log('======== END OBJ ========');

		
		
		var labelCoach = Ti.UI.createLabel({
		    textAlign:'left',
		    top:heightCoach,
			left:"90dp",
			// height:25,
			width:"200dp",
			color:'#fefffd',
			backgroundColor:'#5090cd',
		    font:{fontSize:"12dp"},
		    slotId: dataL.slotId,
		    doctorId: dataL.doctorId,
		    doctorCrm: dataL.doctorCrm,
		    doctorName: dataL.doctorName,
		    apptTime: dataL.time,
		    price: dataL.price,
		    text:'    '+dataL.time+' - Dr(a). '+dataL.doctorName,
		    borderRadius:4,
		    backgroundPaddingLeft: "30dp",
	    	backgroundPaddingRight: "30dp"
		});
		
		labelCoach.addEventListener('click',function(e){
			console.log(e);
			slotId = e.source.slotId;
			doctorName = e.source.doctorName;
			doctorId = e.source.doctorId;
			doctorCrm = e.source.doctorCrm;
			apptTime = e.source.apptTime;
			price = e.source.price;
			
			console.log('======== EXTRACTED ========');
			console.log(slotId, '  slotId');
			console.log(doctorId, '  doctorId');
			console.log(doctorName, '  doctorName');
			console.log(doctorCrm, '  doctorCrm');
			console.log(apptTime, '  apptTime');
			console.log(price, '  price');
			console.log('======== END EXTRACTED ========');
			
			var widthModal = 276;
			
		    var modalConfirm = Ti.UI.createView ({
			    textAlign:'left',
				height:"181dp",
				width:"276dp",
				zIndex:98
			});
			
			var modalConfirmLabel = Ti.UI.createLabel({
			    textAlign:'left',
				height:"179dp",
				width:"274dp",
				left:0,
				zIndex:5,
				backgroundColor:'#fafafa'
			});
			
			var modalConfirmBg = Ti.UI.createLabel({
			    textAlign:'left',
			    top:"10dp",
			    right:0,
				height:"178dp",
				width:"276dp",
				zIndex:4,
				backgroundColor:'#000000',
				opacity:0.3
			});
			
			modalConfirm.add(modalConfirmLabel);
			modalConfirm.add(modalConfirmBg);
		
		
		var labelModalTitle = Ti.UI.createLabel({
		    textAlign:'left',
		    top:"18dp",
			left:"25dp",
			color:'#868688',
			font:{fontSize:"25dp"},
			zIndex:12,
			text:'Confirmando'
		});
		
		var pickerVal = picker.getValue();
		
		var labelModalDesc = Ti.UI.createLabel({
		    textAlign:'left',
		    top:"58dp",
			left:"25dp",
			zIndex:12, width:"210dp",
			color:'#868688',
			font:{fontSize:"12dp"},
			text: 'Sua consulta de '+speciality_name+' com Dr(a) '+doctorName+' será '+FormatDate(pickerVal.getDate(),pickerVal.getMonth(),pickerVal.getFullYear())+' as '+apptTime+'hrs na clínica '+clinic_name+'.'
		});
		
		var labelModalEdit = Ti.UI.createLabel({
		    textAlign:'left',
		    zIndex:12,
		    top:"138dp",
			left:"25dp",
			color:'#868688',
			font:{fontSize:"15dp"},
			text: 'Cancelar'
		});
		
		var labelModalConfirm = Ti.UI.createLabel({
		    textAlign:'left',
		    top:"138dp",
		    zIndex:12,
			left:"145dp",
			color:'#5090cd',
			font:{fontSize:"15dp"},
			text: 'Confirmar'
		});
		
		labelModalConfirm.addEventListener('click',function(e){
			win.remove(modalConfirm);

			
			var pickerVal =  picker.getValue();
			
			var especialidade = speciality_name;
			var doutor = doctorName;
			var doutorId = doctorId;
			var doutorCrm = doctorCrm;
			var preco = price;
			var data = pickerVal.getDate()+' - '+pickerVal.getMonth() +' - '+ pickerVal.getFullYear();
			var horario = apptTime;
			var clinica = clinic_name;
			var endereco_clinica = clinic_address;
			// var slotId = slotId;
			console.log(slotId, '-------------- slotId');
			
			var dadosPacienteView = Alloy.createController("dados_paciente",{
				"especialidade": especialidade,
				"doutor": doutor,
				"doutorId": doutorId,
				"doutorCrm": doutorCrm,
				"data":data,
				"horario":horario,
				"clinica":clinica,
				"clinic_id": clinic_id,
				"endereco_clinica": endereco_clinica,
				"preco": preco,
				"slotId": slotId,
				"speciality_backend_id": speciality_backend_id,
				"speciality_id": speciality_id
			}).getView();
		});
		
		labelModalEdit.addEventListener('click',function(e){
			win.remove(modalConfirm);
		});
		
		
		modalConfirm.add(labelModalTitle);
		modalConfirm.add(labelModalDesc);
		modalConfirm.add(labelModalEdit);
		modalConfirm.add(labelModalConfirm);
		
		win.add(modalConfirm);
		
		
	
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
win.add(clickable_area);
win.add(pickerLabel);  //pickerLabel.hide();
win.add(buttonAction);
win.add(borderSeparatorTable);
win.add(picker);
win.add(bgPicker);
win.add(labelTitle);
win.add(labelSelect);
win.add(table);
win.open();
