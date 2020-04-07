$(document).ready(function(){
	$('.menu i').click(function(){
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
});