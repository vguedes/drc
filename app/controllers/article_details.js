var args = arguments[0] || {};
var articleId = args.articleId || false;
var article = args.article || false;

var data_css =  "<head><style>" +
				"h1 {fontSize:14; fontWheight:bold; font:red}" +
				"</style></head>";

$.article.text = article;


var openDetail = function(e) {
	var db = Ti.Database.open('_alloy_');
	
	var detail_name = e['source']['id'];
	var detail_description = e['source']['title'];
	var rs = db.execute("SELECT body FROM article_" + detail_name + " WHERE article_id = " + articleId);
	var body = rs.isValidRow() ? rs.fieldByName('body') : "Vazio";
	
	rs.close();
	db.close();
	
	var detail_args = {
		article_id: articleId,
		article_name: article,
		detail_name: detail_name,
		detail_description: detail_description,
		detail_HTML: body
	};

	var detail_view = Alloy.createController("detail", detail_args).getView();
    // if (OS_IOS) {
        // $.navGroupWin.openWindow(saudeaz_view);
    // }
 	// if (OS_ANDROID) {
 		detail_view.addEventListener('open', function(e) {
   			detail_view.activity.actionBar.hide();
		});
        detail_view.open();
	// }	

};