var back = function(e) {$.win.close();};

var openRelatedArticle = function(e) {
	var articleId = e['source']['id'];
	var article = e['source']['text'];
	var articledetails_view = Alloy.createController("article_details", {'articleId': articleId, 'article': article}).getView();
    // if (OS_IOS) {
        // $.navGroupWin.openWindow(saudeaz_view);
    // }
 	// if (OS_ANDROID) {
 		articledetails_view.addEventListener('open', function(e) {
   			articledetails_view.activity.actionBar.hide();
		});
        articledetails_view.open();
    // }   
};

var args = arguments[0] || {};
var articleId = args.articleId || false;
var article = args.article || false;

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

rs.close();


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

var query2 = "SELECT " +
			"  article.id," +
			"  article.name " +
			"FROM " +
			"  article " +
			"INNER JOIN " +
			"  related_articles " +
			"ON " +
			"  article.id = related_articles.related_article_id " +
			"WHERE " +
			"  related_articles.article_id = " + articleId + ";";

var articlesRS = db.execute(query2);

var related_articles = [];
while (articlesRS.isValidRow()) {
	related_articles.push({
		'articleId': articlesRS.fieldByName('id'),
		'articleName': articlesRS.fieldByName('name')
	});
  articlesRS.next();
}
var articles_labels = [];
if (related_articles.length) {
	
	for (var i=0; i < related_articles.length; i++) {
	  var art = related_articles[i];
	  Ti.API.log('info', art.articleName);
	  var ll = $.UI.create('Label', {text: art.articleName, id: art.articleId, classes: ["rel_articles"]});
	  ll.addEventListener('click', openRelatedArticle);
	  $.rel_articles_view.add(ll);
	};

} else {
	Ti.API.log('info', 'Sem artigos relacionados');
};
articlesRS.close();
db.close();
