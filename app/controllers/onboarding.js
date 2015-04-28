var args = arguments[0] || {};

function sendVerificationCode() {
	// Ti.API.log('error','INICIO verification');
	var authcode = $.input_phone_number.value;
	if (! authcode) {
		alert("Digite o código de verificação.");
	} else{
		if (authcode.length < 2) {
			alert("Código de verificação imcompleto");
		} else{
			
			$.sbt1.text = "";
			$.sbt2.text = "Validando. Por favor aguarde...";
			$.input_phone_number.value = "";
			$.input_phone_number.hide();
			$.round_btn.hide();
			// $.wait.show();

			var postData = "phonenumber=" + $.phonenumber.text;
			postData += "&authcode=" + authcode;

			// Network
			var xhrURL = "http://162.244.30.227/api/setAuthCode.php";
			var xhr_object = Ti.Network.createHTTPClient();
			xhr_object.open("POST", xhrURL, true);
			
			// Headers
			xhr_object.setRequestHeader( "Content-type" , "application/x-www-form-urlencoded" );
			xhr_object.setRequestHeader( "Content-length" , postData.length);
			xhr_object.setRequestHeader( "Connection" , "close" );
			
			// Sending
			xhr_object.send(postData);
			
			//IF LOAD OK
		    xhr_object.onload = function(){ 
		    	var rq_object = JSON.parse(this.responseText);
		        if (! rq_object['success']) {
		        	alert(rq_object['error']);
		        } else{
		        	// ALL CLEAR, STORE AUTH AND PHONENUMBER TO DATABASE
		        	var db = Ti.Database.open('_alloy_');
		        	var query = 'INSERT INTO auth_data VALUES ("' +$.phonenumber.text + '", "' + rq_object.hash + '");';
		        	var result = db.execute(query);
		        	// DEBUG
		        	var query = "SELECT * FROM auth_data";
		        	var rs = db.execute(query);
		        	while (rs.isValidRow()) {
		        		alert(rs.fieldByName('phonenumber') + rs.fieldByName('hash'));
		        		rs.next();
		        	}
		        };
		        // $.win.close();
		    };
		    
		    //IF LOAD ERROR
		    xhr_object.onerror = function(){ 
		        alert("Ocorreu um erro de rede!");
		    };
			
		};
	};
	// Ti.API.log('error','FIM verification');
	
}

function sendPhoneNumber() {
	// Ti.API.log('error','INICIO phone');
	var phonenumber = $.input_phone_number.value;
	if (! phonenumber) {
		alert("Digite o número do seu celular.");
	} else{
		if (phonenumber.length < 11) {
			alert("Digite seu número de celular com o DDD.");
		} else{
			$.phonenumber.text = phonenumber;
			$.sbt1.text = "";
			$.sbt2.text = "Aguarde, enviando informações...";
			$.input_phone_number.value = "";
			$.input_phone_number.hide();
			$.round_btn.hide();
			var postData = "phonenumber=" + phonenumber;

			// Network
			var xhrURL = "http://162.244.30.227/api/getAuthCode.php";
			var xhr_object = Ti.Network.createHTTPClient();
			xhr_object.open("POST", xhrURL, true);
			
			// Headers
			xhr_object.setRequestHeader( "Content-type" , "application/x-www-form-urlencoded" );
			xhr_object.setRequestHeader( "Content-length" , postData.length);
			xhr_object.setRequestHeader( "Connection" , "close" );
			
			// Sending
			xhr_object.send(postData);
			
			//IF LOAD OK
		    xhr_object.onload = function(){ 
		    	var rq_object = JSON.parse(this.responseText);
		        if (! rq_object['success']) {
		        	alert(rq_object['error']);
		        } else{
					$.sbt1.text = "Para completar a validação,";
					$.sbt2.text = "digite abaixo o código enviado por SMS";
					$.input_phone_number.show();
					$.round_btn.show();
					$.next_btn.removeEventListener('click', sendPhoneNumber);
					$.next_btn.addEventListener('click', sendVerificationCode);

		        };
		    };
		    
		    //IF LOAD ERROR
		    xhr_object.onerror = function(){ 
		        alert("Ocorreu um erro de rede!");
		    };
			
		};
	};
	// Ti.API.log('error','FIM phone');
}