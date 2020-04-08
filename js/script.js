$(document).ready(function(){
	$('#slide').click(function(){
		if($('.menu').attr('data') == 'close'){
		$('.search').slideDown();
		$(this).removeClass('fa fa-search');
		$(this).addClass('fas fa-times');
		$('.menu').attr('data','open');
	}else{
		$('.search').slideUp();
		$(this).removeClass('fas fa-times');
		$(this).addClass('fa fa-search');
		$('.menu').attr('data','close');
	}
	});
	$('#light').click(function(){
		if($(this).attr('data') == 'off'){
		$('body').addClass('body');
		$(this).removeClass('fas fa-lightbulb');
		$(this).addClass('far fa-lightbulb');
		$(this).attr('data','on');
		}else{
			$('body').removeClass('body');
			$(this).removeClass('far fa-lightbulb');
			$(this).addClass('fas fa-lightbulb');
			$(this).attr('data','off');
		}
	});
});