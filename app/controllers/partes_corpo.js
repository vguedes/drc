var args = arguments[0] || {};

function open_articles(e) {
	var window_title = e.source.children[1].text;
	var articleView = Alloy.createController("artigos", {'articlesSession': window_title, 'window_title': window_title}).getView();
}
