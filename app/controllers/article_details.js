var back = function(e) {$.win.close();};

var args = arguments[0] || {};
var articleId = args.articleId || false;
var article = args.article || false;

// var data_css =  "<head><style>" +
				// "h1 {fontSize:14; fontWheight:bold; font:red}" +
				// "</style></head>";

$.article.text = article;

var query = "SELECT" +
			"  article_details.description as detail, " +
			"  article_article_details.data as description " +
			"FROM " +
			"  article_details " +
			"INNER JOIN " +
			"  article_article_details " +
			"ON " +
			"  article_details.id = article_article_details.articledetails_id " +
			"WHERE " +
			"  article_article_details.article_id = " + articleId +";";
Ti.API.log(query);

var db = Ti.Database.open('_alloy_');
var rs = db.execute(query);

Ti.API.log(rs.rowCount);

details = new Object();
while (rs.isValidRow()) {
	details[rs.fieldByName('detail')] = rs.fieldByName('description');
	rs.next();
}

db.close()
rs.close()


var accordionData = [];
accordionData.push('<html><head><link rel="stylesheet" type="text/css" href="accordion.css"></head><body><div class="accordion vertical"><ul>');

details_names = Object.keys(details);
for(var i=0,j=details_names.length; i<j; i++){
	detail_name = details_names[i];
	detail_description = details[detail_name];

	accordionData.push('<li><input type="checkbox" id="checkbox-');
	accordionData.push(i + 1);
	accordionData.push('" name="checkbox-accordion" /><label for="checkbox-');
	accordionData.push(i + 1);
	accordionData.push('">');
	accordionData.push(detail_name);
	accordionData.push('</label><div class="content">');
	accordionData.push(detail_description);
	accordionData.push('</div></li>');
};
accordionData.push('</ul></div></body></html>');

$.details.html = accordionData.join('');






// var openDetail = function(e) {
	// var db = Ti.Database.open('_alloy_');
// 	
	// var detail_name = e['source']['id'];
	// var detail_description = e['source']['title'];
	// var rs = db.execute("SELECT body FROM article_" + detail_name + " WHERE article_id = " + articleId);
	// var body = rs.isValidRow() ? rs.fieldByName('body') : "Vazio";
// 	
	// rs.close();
	// db.close();
// 	
	// var detail_args = {
		// article_id: articleId,
		// article_name: article,
		// detail_name: detail_name,
		// detail_description: detail_description,
		// detail_HTML: body
	// };
// 
	// var detail_view = Alloy.createController("detail", detail_args).getView();
    // // if (OS_IOS) {
        // // $.navGroupWin.openWindow(saudeaz_view);
    // // }
 	// // if (OS_ANDROID) {
 		// detail_view.addEventListener('open', function(e) {
   			// detail_view.activity.actionBar.hide();
		// });
        // detail_view.open();
	// // }	
// 
// };