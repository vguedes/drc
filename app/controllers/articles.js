var back = function(e) {$.win.close();};


var openArticleDetails = function(e) {
	var articleId = e['source']['id'];
	var article = e['source']['title'];
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

var articles = [];
var db = Ti.Database.open('_alloy_');
var articlesRS = db.execute('SELECT id, name FROM article ORDER BY name');
while (articlesRS.isValidRow()) {
	articles.push({
		'articleId': articlesRS.fieldByName('id'),
		'articleName': articlesRS.fieldByName('name')
	});
  articlesRS.next();
}
articlesRS.close();
db.close();

for(var i=0,j=articles.length; i<j; i++){
  var article = articles[i];
  var articleId = article['articleId'];
  var articleName = article['articleName'];
  var articleFirstLetter = articleName.charAt(0).toUpperCase();
  var row = Ti.UI.createTableViewRow({title: articleName, id: articleId});
  row.addEventListener('click', openArticleDetails);
  $['s' + articleFirstLetter].add(row);
};