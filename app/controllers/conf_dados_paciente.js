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
			
			console.log(speciality_backend_id);


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
	left: "72dp",zIndex:999, text:"5. Confirme os dados"
});



viewTitle.add(labelTitleText);
viewTitle.add(clickable_area);


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
	    height:"72dp"
	});


	//	Define & Add TableRow Childrens
	var icoPerson = Ti.UI.createImageView({
	  image:'/iconPerson.png',
	  width:'24dp',
	  left:"16dp"
	});
	
	row.add(icoPerson);
		
	var textFieldCel = Ti.UI.createTextField({
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#336699',
	  bottom:"16dp",
	  left: "60dp",
	  width: "250dp", height: "60dp",
	  hintText:cpf,
	  verticalAlign: Titanium.UI.TEXT_VERTICAL_ALIGNMENT_BOTTOM,
	  font:{fontSize:"14SP"}
	});
	
	row.add(textFieldCel);	
	
	var labelLetter = Ti.UI.createLabel({
		width: Ti.UI.SIZE,
		height: Ti.UI.SIZE,
		// backgroundColor:'#cccccc',
		left: "72dp", 
		top: "5dp",
		text: "CPF",
		font:{fontSize:"16SP"},
		color: '#336699'
	});
	
	row.add(labelLetter);	
	
//	Pushing Row
tableData.push(row);

	//	Define TableRow cel
	var rowCel = Ti.UI.createTableViewRow({
	    className:'forumEvent',
	    height:"72dp"
	});


	//	Define & Add TableRow Childrens
	var icoPerson = Ti.UI.createImageView({
	  image:'/iconCel.png',
	  width:'24dp',
	  left:"16dp"
	});
	
	rowCel.add(icoPerson);
	
	var textFieldCel = Ti.UI.createTextField({
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#336699',
	  bottom:"16dp",
	  left: "60dp",
	  width: "250dp", height: "60dp",
	  hintText:tel,
	  verticalAlign: Titanium.UI.TEXT_VERTICAL_ALIGNMENT_BOTTOM,
	  font:{fontSize:"14SP"}
	});
	
	rowCel.add(textFieldCel);	
	
	var labelLetter = Ti.UI.createLabel({
		width: Ti.UI.SIZE,
		height: Ti.UI.SIZE,
		// backgroundColor:'#cccccc',
		left: "72dp", 
		top: "5dp",
		text: "CELULAR",
		font:{fontSize:"16SP"},
		color: '#336699'
	});
	
	rowCel.add(labelLetter);	
	
//	Pushing Row
tableData.push(rowCel);

	//	Define TableRow Nome
	var rowNome = Ti.UI.createTableViewRow({
	    className:'forumEvent',
	    height:"72dp"
	});


	//	Define & Add TableRow Childrens
	var icoPerson = Ti.UI.createImageView({
	  image:'/images/android/common/icon_confirme/01.png',
	  width:'24dp',
	  left:"16dp"
	});
	
	rowNome.add(icoPerson);
	
	var textFieldNome = Ti.UI.createTextField({
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#336699',
	  bottom:"16dp",
	  left: "60dp",
	  width: "250dp", height: "60dp",
	  hintText:"Digite seu nome",
	  verticalAlign: Titanium.UI.TEXT_VERTICAL_ALIGNMENT_BOTTOM,
	  font:{fontSize:"14SP"}
	});
	
	rowNome.add(textFieldNome);	
	
	var labelLetter = Ti.UI.createLabel({
		width: Ti.UI.SIZE,
		height: Ti.UI.SIZE,
		// backgroundColor:'#cccccc',
		left: "72dp", 
		top: "5dp",
		text: "NOME",
		font:{fontSize:"16SP"},
		color: '#336699'
	});
	
	rowNome.add(labelLetter);	
	
//	Pushing Row
tableData.push(rowNome);

	//	Define TableRow Email
	var rowEmail = Ti.UI.createTableViewRow({
	    className:'forumEvent',
	    height:"72dp"
	});


	//	Define & Add TableRow Childrens
	var icoPerson = Ti.UI.createImageView({
	  image:'/images/android/common/icon_confirme/03.png',
	  width:'24dp',
	  left:"16dp"
	});
	
	rowEmail.add(icoPerson);
	
	
	var textFieldEmail = Ti.UI.createTextField({
	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#336699',
	  bottom:"16dp",
	  left: "60dp",
	  width: "250dp", height: "60dp",
	  hintText:"Digite seu e-mail",
	  verticalAlign: Titanium.UI.TEXT_VERTICAL_ALIGNMENT_BOTTOM,
	  font:{fontSize:"14SP"}
	});
	
	rowEmail.add(textFieldEmail);	
	
	var labelLetter = Ti.UI.createLabel({
		width: Ti.UI.SIZE,
		height: Ti.UI.SIZE,
		// backgroundColor:'#cccccc',
		left: "72dp", 
		top: "5dp",
		text: "E-MAIL",
		font:{fontSize:"16SP"},
		color: '#336699'
	});
	
	rowEmail.add(labelLetter);	
	
//	Pushing Row
tableData.push(rowEmail);

	//	Define TableRow Nascimento
	var rowNasc = Ti.UI.createTableViewRow({
	    className:'forumEvent',
	    height:"72dp"
	});


	//	Define & Add TableRow Childrens
	var icoPerson = Ti.UI.createImageView({
	  image:'/iconPerson.png',
	  width:'24dp',
	  left:"16dp"
	});
	
	rowNasc.add(icoPerson);

	
	var textFieldNacimento = Ti.UI.createTextField({

	  borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	  color: '#336699',
	  bottom:"16dp",
	  left: "60dp",
	  width: "250dp", height: "60dp",
	  hintText:"Digite seu ano de nascimento",
	  verticalAlign: Titanium.UI.TEXT_VERTICAL_ALIGNMENT_BOTTOM,
	  font:{fontSize:"14SP"}
	});
	
	rowNasc.add(textFieldNacimento);	
	
	var labelLetter = Ti.UI.createLabel({
		width: Ti.UI.SIZE,
		height: Ti.UI.SIZE,
		left: "72dp", 
		top: "5dp",
		text: "NASCIMENTO",
		font:{fontSize:"16SP"},
		color: '#336699'
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
    	width: '56dp',
	    height: '56dp',
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
	        'password': '098765',
	        'grant_type':  'password'
	    };
		
		var client = Ti.Network.createHTTPClient({
			onload: function(e) {
				console.log(this.responseText);
				var token = JSON.parse(this.responseText).access_token;
				var xhr = Ti.Network.createHTTPClient({
					onload: function(e) {
						var results = JSON.parse(this.responseText);
						if (results.operationResult.status == "OK") {



						    var consultaMarcadaView = Alloy.createController("consulta_marcada",{
						    	"especialidade": especialidade,
						    	"doutorId": doutorId,
								"doutor": doutor,
								"doutorCrm": doutorCrm,
								"data":data,
								"horario":horario,
								"clinica":clinica,
								"endereco_clinica": endereco_clinica,
								"preco": preco
						    }).getView();




						} else{
							alert('results');
						};
						console.log(results);
					},
					onerror: function(e) {
						console.error(e);
						// alert(e.error);
					},
					timeout: 120000
				});
				
				// var birthDate = textFieldNacimento
				
				//console.log(speciality_backend_id);
				
				var params = {
					patient: {
		                name: textFieldNome.value,
		                cpf: cpf,
		                cellPhoneDdd: tel.slice(0, 2),
		                cellPhone: tel.slice(2),
		                mail: textFieldEmail.value,
		                birthDate: {date: '04-01-2010', gmt: '-03:00', time: '00:00'}, 
		                origin: 1
					},
	                slotId: slotId,
					serviceId: speciality_backend_id
	             };
	             params = JSON.stringify(params);
	             params = JSON.parse(params);
	             console.log(params);
	             xhr.open("POST", base_url + '/schedule');
	             xhr.setRequestHeader('Authorization', 'Bearer '  + token);
	             xhr.setRequestHeader('Content-Type', 'application/json');
	             xhr.send(JSON.stringify(params));
				
				
			},
			onerror: function(e) {
				console.log(this.getAllResponseHeaders( ));
				console.log(arguments);
			},
			timeout : 120000  // in milliseconds
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




win.add(viewTitle);
win.add(table);
win.open();
