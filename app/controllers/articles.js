var db = Ti.Database.open('_alloy_');
// db.file.setRemoteBackup(false);

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

var showDetails = function (e) {
	var articleId = e['source']['id'];
	var article = e['source']['text'];
	
};

var articles = [];
var articlesRS = db.execute('SELECT id, titleF FROM article ORDER BY titleF');
while (articlesRS.isValidRow())
{
	articles.push({
		'articleId': articlesRS.fieldByName('id'),
		'articleTitle': articlesRS.fieldByName('titleF')
	});
  articlesRS.next();
}
articlesRS.close();

for(var i=0,j=articles.length; i<j; i++){
  var article = articles[i];
  var articleId = article['articleId'];
  var articleTitle = article['articleTitle'];
  var articleFirstLetter = articleTitle.charAt(0).toUpperCase();
  var row = Ti.UI.createTableViewRow({title: articleTitle, id: articleId});
  row.addEventListener('click', openArticleDetails);
  $['s' + articleFirstLetter].add(row);
};


