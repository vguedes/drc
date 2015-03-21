var args = arguments[0] || {};
var article_id = args.article_id || false;
var article_name = args.article_name || false;
var detail_name = args.detail_name || false;
var detail_description = args.detail_description || false;
var detail_HTML = args.detail_HTML || false;

$.article.text = article_name + ' -> ' + detail_description;

$.detail_HTML.html = detail_HTML;