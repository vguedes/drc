var args = arguments[0] || {};

function open_articles(e) {
	
	console.log('abrindo artigos');
	var window_title = e.source.children[1].text;
	var section = e.source.children[1].section;
	console.log(window_title + " - " + section);
	var articleView = Alloy.createController("artigos", {'articlesSession': section, 'window_title': window_title}).getView();
	
 }
 
