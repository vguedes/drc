var args = arguments[0] || {};

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
today = '22'+'-'+mm+'-'+yyyy;

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
					 console.log(slot);
					 var apptMedicalName = slot['medicalName'];
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
					 	'doctorName': apptMedicalName
					 });
				   };
				 };
				 // -----------------------------------------> RENDERIZA A TELA
	         	console.log(rtrn);
         	},
         	onerror: function(e) {
         		alert('error');
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
 client.open("POST", base_url + auth_method);
 client.send(auth_params);
 