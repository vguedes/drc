$(document).ready(function(){
	$('li').click(function(){
		var classN = $(this).attr('class');
		console.log(classN);
		if(classN == 'list active'){
			$(this).removeClass('active');
			$(this).find('.content').css('display','none');
		}else{
			$(this).addClass('active');
			$(this).find('.content').css('display','block');
		}
	});
});
