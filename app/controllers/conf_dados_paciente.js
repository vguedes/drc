var args = arguments[0] || {};
var cpf = args['cpf'];
var tel = args['tel'];


			var especialidade = args['especialidade'];
			var doutorId = args['doutorId'];
			var doutor = args['doutor'];
			var doutorCrm = args['doutorCrm'];
			var data = args['data'];
			var horario = args['horario'];
			var clinica = args['clinica'];
			var endereco_clinica = args['endereco_clinica'];
			var preco = args['preco'];
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
	height: '56dp',
	color: "#fefffd",
	backgroundColor:"#5090cd",
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	top:"0", font:{fontSize:"20dp",fontWeight:'bold'},
	text:"5. Confirme os dados"
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
	  top:30
	});
	
	row.add(icoPerson);
	
	var borderSeparator = Ti.UI.createLabel({
		width:'100%',
		height:'1px',
		backgroundColor:'#cccccc',
		left: 50, width: 250, 
		top:48
	});
	
	row.add(borderSeparator);
	
	var textFieldCel = Ti.UI.createTextField({
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#336699',
	  top:16,left: 40,
	  width: 250, height: 50,
	  hintText:cpf,
	  font:{fontSize:14}
	});
	
	row.add(textFieldCel);	
	
	var labelLetter = Ti.UI.createLabel({
	    textAlign:'left',
		left:50,
	    font:{fontSize:14},
	    width:150,
	    text:'CPF'
	});
	
	row.add(labelLetter);	
	
//	Pushing Row
tableData.push(row);

	//	Define TableRow cel
	var rowCel = Ti.UI.createTableViewRow({
	    className:'forumEvent',
	    height:50
	});


	//	Define & Add TableRow Childrens
	var icoPerson = Ti.UI.createImageView({
	  image:'/iconPerson.png',
	  width:'27px',
	  height:'37px',
	  left:20,
	  top:30
	});
	
	rowCel.add(icoPerson);
	
	var borderSeparator = Ti.UI.createLabel({
		width:'100%',
		height:'1px',
		backgroundColor:'#cccccc',
		left: 50, width: 250, 
		top:48
	});
	
	rowCel.add(borderSeparator);
	
	var textFieldCel = Ti.UI.createTextField({
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#336699',
	  top:16,left: 40,
	  width: 250, height: 50,
	  hintText:tel,
	  font:{fontSize:14}
	});
	
	rowCel.add(textFieldCel);	
	
	var labelLetter = Ti.UI.createLabel({
	    textAlign:'left',
		left:50,
	    font:{fontSize:14},
	    width:150,
	    text:'CELULAR'
	});
	
	rowCel.add(labelLetter);	
	
//	Pushing Row
tableData.push(rowCel);

	//	Define TableRow Nome
	var rowNome = Ti.UI.createTableViewRow({
	    className:'forumEvent',
	    height:50
	});


	//	Define & Add TableRow Childrens
	var icoPerson = Ti.UI.createImageView({
	  image:'/iconPerson.png',
	  width:'27px',
	  height:'37px',
	  left:20,
	  top:30
	});
	
	rowNome.add(icoPerson);
	
	var borderSeparator = Ti.UI.createLabel({
		width:'100%',
		height:'1px',
		backgroundColor:'#cccccc',
		left: 50, width: 250, 
		top:48
	});
	
	rowNome.add(borderSeparator);
	
	var textFieldNome = Ti.UI.createTextField({
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#336699',
	  top:16,left: 40,
	  width: 250, height: 50,
	  hintText:"Digite seu nome",
	  font:{fontSize:14}
	});
	
	rowNome.add(textFieldNome);	
	
	var labelLetter = Ti.UI.createLabel({
		touchEnabled: false,
	    textAlign:'left',
		left:50,
	    font:{fontSize:14},
	    width:150,
	    text:'NOME'
	});
	
	rowNome.add(labelLetter);	
	
//	Pushing Row
tableData.push(rowNome);

	//	Define TableRow Email
	var rowEmail = Ti.UI.createTableViewRow({
	    className:'forumEvent',
	    height:50
	});


	//	Define & Add TableRow Childrens
	var icoPerson = Ti.UI.createImageView({
	  image:'/iconPerson.png',
	  width:'27px',
	  height:'37px',
	  left:20,
	  top:30
	});
	
	rowEmail.add(icoPerson);
	
	var borderSeparator = Ti.UI.createLabel({
		width:'100%',
		height:'1px',
		backgroundColor:'#cccccc',
		left: 50, width: 250, 
		top:48
	});
	
	rowEmail.add(borderSeparator);
	
	var textFieldEmail = Ti.UI.createTextField({
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#336699',
	  top:16,left: 40,
	  width: 250, height: 50,
	  hintText:"Digite seu e-mail",
	  font:{fontSize:14}
	});
	
	rowEmail.add(textFieldEmail);	
	
	var labelLetter = Ti.UI.createLabel({
		touchEnabled: false,
	    textAlign:'left',
		left:50,
	    font:{fontSize:14},
	    width:150,
	    text:'E-MAIL'
	});
	
	rowEmail.add(labelLetter);	
	
//	Pushing Row
tableData.push(rowEmail);

	//	Define TableRow Nascimento
	var rowNasc = Ti.UI.createTableViewRow({
	    className:'forumEvent',
	    height:50
	});


	//	Define & Add TableRow Childrens
	var icoPerson = Ti.UI.createImageView({
	  image:'/iconPerson.png',
	  width:'27px',
	  height:'37px',
	  left:20,
	  top:30
	});
	
	rowNasc.add(icoPerson);
	
	var borderSeparator = Ti.UI.createLabel({
		width:'100%',
		height:'1px',
		backgroundColor:'#cccccc',
		left: 50, width: 250, 
		top:48
	});
	
	rowNasc.add(borderSeparator);
	
	var textFieldNacimento = Ti.UI.createTextField({
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#336699',
	  top:16,left: 40,
	  width: 250, height: 50,
	  hintText:"Digite seu ano de nascimento",
	  font:{fontSize:14}
	});
	
	rowNasc.add(textFieldNacimento);	
	
	var labelLetter = Ti.UI.createLabel({
		touchEnabled: false,
	    textAlign:'left',
		left:50,
	    font:{fontSize:14
	    	},
	    width:150,
	    text:'NASCIMENTO'
	});
	
	rowNasc.add(labelLetter);	
	
//	Pushing Row
tableData.push(rowNasc);




	
//	Define TableRow BUTTON add


	var rowAction = Ti.UI.createTableViewRow({
	    className:'forumEvent',
	    height:100
	});


	//	Define & Add TableRow Childrens
	var buttonAction = Ti.UI.createButton({
	    backgroundImage: '/buttonoOk.png',
	    top: 9,
    	width: '102px',
	    height: '104px',
	    right:15,
	    zIndex:9
	});
	
	
	
	
	buttonAction.addEventListener('click',function(btn_action){
		
		
		// Aqui faz o request pra marcar
		
		
	    var base_url = 'https://escaladev.drconsulta.com';
	    var auth_method = '/authenticate';
	    var getAvailableSlots_method = '/schedule/availableslots';
	    var auth_params = {
	        'username': 'gaston',
	        'password': 'teste098765',
	        'grant_type':  'password'
	    };
		
		var client = Ti.Network.createHTTPClient({
			onload: function(e) {
				console.log(this.responseText);
				var token = JSON.parse(this.responseText).access_token;
				var xhr = Ti.Network.createHTTPClient({
					onload: function(e) {
						var results = JSON.parse(this.responseText);
						console.log(results);
					},
					onerror: function(e) {
						console.error(e.error);
					},
					timeout: 10000
				});
				
				// var birthDate = textFieldNacimento
				
				console.log(speciality_backend_id);
				
				var params = {
					'patient': {
		                'name': textFieldNome.value,
		                'cpf': cpf,
		                'cellPhoneDdd': tel.slice(0, 2),
		                'cellPhone': tel.slice(2),
		                'mail': textFieldEmail.value,
		                'birthDate': {'date': '04-01-2010', 'gmt': '-03:00', 'time': '00:00'}, 
		                'origin': 1,
					},
	                'slotId': slotId,
					'serviceId': speciality_backend_id
	             };
	             console.log(params);
	             xhr.open("POST", base_url + '/schedule');
	             xhr.setRequestHeader('Authorization', 'Bearer '  + token);
	             xhr.send(params);
				
				
			},
			onerror: function(e) {
				console.log(e.error);
				console.log(arguments);
			},
			timeout : 10000  // in milliseconds
		});
		
		client.open("POST", base_url + auth_method);
    	client.send(auth_params);
		
		
		
		
	    // var consultaMarcadaView = Alloy.createController("consulta_marcada",{
	    	// "especialidade": especialidade,
	    	// "doutorId": doutorId,
			// "doutor": doutor,
			// "doutorCrm": doutorCrm,
			// "data":data,
			// "horario":horario,
			// "clinica":clinica,
			// "endereco_clinica": endereco_clinica,
			// "preco": preco
	    // }).getView();
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
