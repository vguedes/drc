var db = Ti.Database.open('_alloy_');
// db.file.setRemoteBackup(false);

var asdFunc = function(e) {
	// alert($['U']);
	ee = e['source'];
	for (var el in ee) {
		Ti.API.log(el + " - " + ee[el]);
	}
};

var articles = [];
var articlesRS = db.execute('SELECT id,titleF FROM article ORDER BY titleF');
while (articlesRS.isValidRow())
{
	articles.push({
		'articleId': articlesRS.fieldByName('id'),
		'articleTitle': articlesRS.fieldByName('titleF')
	});
  articlesRS.next();
}
articlesRS.close();

$.articles = articles;

ls = "abcdefghijklmnopqrstuvwxyz".split("");
for (var l in ls) {
	le = ls[l].toUpperCase();
	
	var l = Ti.UI.createLabel({
		text: le,
		id: le,
		color: '#000',
		font: {fontSize: 20},
		left: '5%'
	});
	
	
	l.addEventListener('click', asdFunc);
	$.articlesView.add(l);
	for (var articlePos in articles) {
		var article = articles[articlePos];
		if (article['articleTitle'].charAt(0).toUpperCase() === le) {
			var l = $.UI.create('Label', {'text': article['articleTitle'], 'classes': ['article'],
				'id': article['articleId'], 'visible': 'true'});
			var separator = $.UI.create('View', {'classes': ['separator']});
			$.articlesView.add(l);
			$.articlesView.add(separator);
		}
	}
};



// $.articlesView.scrollTo(0, $.articlesView.U.top);
