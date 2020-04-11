$(document).ready(function(){
	//top menu
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
	//light
	$('#light').click(function(){
		if($(this).attr('data') == 'off'){
		$('body').append('<div class="body"></div>');
		$(this).removeClass('fas fa-lightbulb');
		$(this).addClass('far fa-lightbulb');
		$(this).attr('data','on');
		}else{
			$('.body').remove();
			$(this).removeClass('far fa-lightbulb');
			$(this).addClass('fas fa-lightbulb');
			$(this).attr('data','off');
		}
	});
	//fix menu
	$(window).scroll(function(){
		if($(this).scrollTop() > 400){
			$('.all-menu').addClass('fix');
		}else{
			$('.all-menu').removeClass('fix');
		}
	});
	//slider menu
	$('.head').click(function(){
		if($(this).attr('data') == 'close'){
			$('.text').slideUp();
			$(this).next().slideDown();
			$('.head').attr('data','close');
			$(this).attr('data','open');
		}else{
			$(this).next().slideUp();
			$(this).attr('data','close');
		}
	});
	//fad menu
	$('.fad-text:first').fadeToggle();
	$('.fad-head li:first').addClass('select');
	$('.fad-head li').click(function(){
		$('.fad-head li').removeClass('select');
		$(this).addClass('select');
		$('.fad-text').hide();
		var text = $(this).attr('href');
		$(text).fadeToggle();
	});
});