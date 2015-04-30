var args = arguments[0] || {};

function open_articles(e) {
	
	console.log('abrindo artigos');
	var window_title = e.source.children[1].text;
	var articleView = Alloy.createController("artigos", {'articlesSession': window_title, 'window_title': window_title}).getView();
	
 }
 
