var args = arguments[0] || {};
var db = Ti.Database.open('_alloy_');
var query = 'SELECT * FROM auth_data;';
var result = db.execute(query);
if (result.isValidRow()) {
	$.phone_value.text = result.fieldByName('phonenumber');
	$.hash_value.text = result.fieldByName('hash');
};
result.close();
db.close();

function back() {$.win.close();};


function clear_auth() {
	var db = Ti.Database.open('_alloy_');
	var query = 'DELETE FROM auth_data;';
	var result = db.execute(query);
	db.close();
	$.phone_value.text = "";
	$.hash_value.text = "";
};
