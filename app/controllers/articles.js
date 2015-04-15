var back = function(e) {$.win.close();};

// TODO: Extrair método getArticles

var searchByTags = function(e) {
	var tag = $.sb.getValue();
	if (tag) {
		tag = tag.split(" ");
		tags_query_string = "";
		for (var i=0; i < tag.length; i++) {
		  t = tag[i];
		  if (i) {
		  	tags_query_string = tags_query_string.concat(", '" + t + "'");
		  } else{
		  	tags_query_string = tags_query_string.concat("'" + t + "'");
		  };
		  
		};
		// TODO: Extrair método getArticles		
		var articles = [];
		var db = Ti.Database.open('_alloy_');
		var query = "SELECT article.* FROM article " +
					"JOIN article_article_tags ON article.id = article_article_tags.article_id " +
					"JOIN article_tags ON article_article_tags.article_tag_id = article_tags.id " +
					"WHERE article_tags.tag IN (" + tags_query_string + ") " +
					"group by article.id;";
		
		query.concat("));");
		
		var articlesRS = db.execute(query);
		
		while (articlesRS.isValidRow()) {
			articles.push({
				'articleId': articlesRS.fieldByName('id'),
				'articleName': articlesRS.fieldByName('name')
			});
		  articlesRS.next();
		}
		
		if (articles.length) {
			
			for (var i=0; i < articles.length; i++) {
			  Ti.API.log('info', articles[i].articleName);
			};
		
		} else {
			alert("Não encontrado.");
		};
		articlesRS.close();
		db.close();

	} else {
		alert("Digite algo para pesquisar!");
	};
};

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



var args = arguments[0] || {};
var articlesSession = args.articlesSession || false;
// TODO: Extrair método getArticles
var articles = [];
var db = Ti.Database.open('_alloy_');
if (articlesSession) {
	var query = "SELECT " +
				"  article.id, " +
				"  article.name " +
				"FROM " +
				"  article " +
				"JOIN " +
				"  article_article_sessions " +
				"ON " +
				"  article.id = article_article_sessions.article_id " +
				"JOIN " +
				"  article_sessions " +
				"ON " +
				"  article_article_sessions.article_sessions_id = article_sessions.id " +
				"WHERE " +
				"  article_sessions.name = '" + articlesSession + "';";
} else{
	var query = 'SELECT id, name FROM article ORDER BY name'
};
var articlesRS = db.execute(query);
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