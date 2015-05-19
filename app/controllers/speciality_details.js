var args = arguments[0] || {};
var speciality_id = args.speciality_id || false;

var back = function(e) {$.win.close();};

function load_consulta() {
	var v = Alloy.createController("especialidades", {'appointment': true}).getView();
 		v.addEventListener('open', function(e) {
   			v.activity.actionBar.hide();	

		});
        v.open();
}

function close_window() {
	$.win.close();
}

var tableData = [];
var db = Ti.Database.open('_alloy_');
var query = 'SELECT * FROM speciality WHERE id=' + speciality_id;
var articlesRS = db.execute(query);

var sp = {
	'id': articlesRS.fieldByName('id'),
	'backend_id': articlesRS.fieldByName('backend_id'),
	'name': articlesRS.fieldByName('name'),
	'icon': articlesRS.fieldByName('icon'),
	'synonym': articlesRS.fieldByName('synonym'),
	'description': articlesRS.fieldByName('description'),
	'symptoms': articlesRS.fieldByName('symptoms'),
	'exams': articlesRS.fieldByName('exams')
};

$.text.text = sp.name;
$.textMenor.text = sp.synonym;
$.sp_description.text = sp.description;
$.symptoms.text = sp.symptoms;
$.exams.text = sp.exams;
$.symptoms.setHeight(0);
$.exams.setHeight(0);
$.symptoms_view_arrow.setTransform(Ti.UI.create2DMatrix({ 
    rotate: 90
}));
$.exams_view_arrow.setTransform(Ti.UI.create2DMatrix({ 
    rotate: 90
}));


function toggleSymptoms(e) {
	if ($.symptoms.getHeight() == 0) {
		$.symptoms.setHeight("90dp");
		$.symptoms_view_arrow.setTransform(Ti.UI.create2DMatrix({ 
		    rotate: -90
		}));
	} else {
		$.symptoms.setHeight(0);
		$.symptoms_view_arrow.setTransform(Ti.UI.create2DMatrix({ 
		    rotate: 90
		}));
	}
}

function toggleExams(e) {
	if ($.exams.getHeight() == 0) {
		$.exams.setHeight("90dp");
		$.exams_view_arrow.setTransform(Ti.UI.create2DMatrix({ 
		    rotate: -90
		}));
	} else {
		$.exams.setHeight(0);
		$.exams_view_arrow.setTransform(Ti.UI.create2DMatrix({ 
		    rotate: 90
		}));
	}
}

function showArticles(e) {
	var consultaView = Alloy.createController("artigos", {'speciality': sp.name, 'window_title': sp.name}).getView();
}

// while (articlesRS.isValidRow()) {
	// tableData.push({
		// 'id': articlesRS.fieldByName('id'),
		// 'backend_id': articlesRS.fieldByName('backend_id'),
		// 'name': articlesRS.fieldByName('name'),
		// 'icon': articlesRS.fieldByName('icon'),
		// 'synonym': articlesRS.fieldByName('synonym'),
		// 'description': articlesRS.fieldByName('description'),
		// 'symptoms': articlesRS.fieldByName('symptoms'),
		// 'exams': articlesRS.fieldByName('exams')
	// });
  // articlesRS.next();
// }
// articlesRS.close();
// db.close();


console.log(sp);

// var openRelatedArticle = function(e) {
	// var articleId = e['source']['id'];
	// var article = e['source']['text'];
	// var articledetails_view = Alloy.createController("article_details", {'articleId': articleId, 'article': article}).getView();
    // // if (OS_IOS) {
        // // $.navGroupWin.openWindow(saudeaz_view);
    // // }
 	// // if (OS_ANDROID) {
//  		
 		// console.log('opening');
 		// articledetails_view.addEventListener('open', function(e) {
   			// articledetails_view.activity.actionBar.hide();
		// });
        // articledetails_view.open();
    // // }   
// };


// $.text.text = article;
// $.textMenor.text = '';
// 
// //$.article.text = article;
// 
// var query = "SELECT" +
			// "  article_details.description as detail, " +
			// "  article_article_details.data as description " +
			// "FROM " +
			// "  article_details " +
			// "INNER JOIN " +
			// "  article_article_details " +
			// "ON " +
			// "  article_details.id = article_article_details.articledetails_id " +
			// "WHERE " +
			// "  article_article_details.article_id = " + articleId +";";
// Ti.API.log(query);
// 
// var db = Ti.Database.open('_alloy_');
// var rs = db.execute(query);
// 
// Ti.API.log(rs.rowCount);
// 
// details = new Object();
// while (rs.isValidRow()) {
	// details[rs.fieldByName('detail')] = rs.fieldByName('description');
	// rs.next();
// }
// 
// rs.close();
// 
// var convert = new Markdown.getSanitizingConverter().makeHtml;
// var accordionData = [];
// accordionData.push('<html><head><script type="text/javascript" src="jquery.js"></script><script type="text/javascript" src="detailWebView.js"></script><meta name="viewport" content="initial-scale=1.0, user-scalable=no" /><link rel="stylesheet" type="text/css" href="accordion.css"></head><body><div class="accordion vertical"><ul>');
// 
// details_names = Object.keys(details);
// for(var i=0,j=details_names.length; i<j; i++){
	// detail_name = details_names[i];
	// detail_description = convert(details[detail_name]);
// 	
// 
// 
	// accordionData.push('<li class="list"><div class="labelBox"><img src="iconCel.png" class="imgIcon"/><label>');
	// accordionData.push(detail_name);
	// accordionData.push('</label><span class="arrow"></span></div><div class="content"><div class="cb">');
	// accordionData.push(detail_description);
	// accordionData.push('</div></div></li>');
// };
// accordionData.push('</ul></div></body></html>');
// 
// console.log(accordionData);
// 
// 
// var details = Titanium.UI.createWebView({
            // width  : Ti.UI.FILL,
            // height : Ti.UI.FILL,
            // enableZoomControls: false,
              // backgroundColor: "#eeeeee"
        // });
//         
// details.html = accordionData.join('');
// 
// /*details.addEventListener("load", function() {
   // details.evalJS("$('body').html('changed!');");
// });*/
// 
// 
// //details.evalJS('window.onload=function(){for(var t=document.getElementsByTagName("li"),e=0;e<t.length;e++){var n=t[e];t[e].addEventListener("click",function(){var t=n.getAttribute("class");"list active"==t?n.innerHtml="list unactive":n.innerHTML="list active"},!1)}};');
// 
// $.win.add(details);
// 
// var query2 = "SELECT " +
			// "  article.id," +
			// "  article.name " +
			// "FROM " +
			// "  article " +
			// "INNER JOIN " +
			// "  related_articles " +
			// "ON " +
			// "  article.id = related_articles.related_article_id " +
			// "WHERE " +
			// "  related_articles.article_id = " + articleId + ";";
// 
// var articlesRS = db.execute(query2);
// 
// var related_articles = [];
// while (articlesRS.isValidRow()) {
	// related_articles.push({
		// 'articleId': articlesRS.fieldByName('id'),
		// 'articleName': articlesRS.fieldByName('name')
	// });
  // articlesRS.next();
// }
// var articles_labels = [];
// if (related_articles.length) {
// 	
	// for (var i=0; i < related_articles.length; i++) {
	  // var art = related_articles[i];
	  // Ti.API.log('info', art.articleName);
	  // var ll = $.UI.create('Label', {text: art.articleName, id: art.articleId, classes: ["rel_articles"]});
	  // ll.addEventListener('click', openRelatedArticle);
	// //  $.rel_articles_view.add(ll);
	// };
// 
// } else {
	// Ti.API.log('info', 'Sem artigos relacionados');
// };
// articlesRS.close();
// db.close();
