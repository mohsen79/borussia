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
	$('#bars').click(function(){
		$('.respon-menu').show();
		$('.respon-menu').animate({
			right:0
		},500);
		$('#bars').hide();
		$('body').append('<div class="body2"></div>');
		$('#light').hide();
		$('.all-menu').css('z-index','0');
		$('.slide-menu').css('z-index','0');
		$('.fad-menu').css('z-index','0');
		$('.all-text-menu').css('z-index','0');
		$('.body2').click(function(){
			$('.respon-menu').animate({
				right:-500
			},500);
			$('.respon-menu').fadeToggle();
			$(this).remove();
			$('#bars').show();
			$('#light').show();
			$('.all-menu').css('z-index','5');
			$('.slide-menu').css('z-index','2');
			$('.fad-menu').css('z-index','2');
			$('.all-text-menu').css('z-index','2');
		});
	});
	//fix menu
	$(window).scroll(function(){
		if($(this).scrollTop() > 400){
			$('.all-menu').addClass('fix');
		}else{
			$('.all-menu').removeClass('fix');
		}
	});
	$(window).scroll(function(){
		if($(this).width() < 500){
			$('.all-menu').removeClass('fix');
		}
	});
	//line-up
	/*var line = ['line-up : ', 'burki' , 'hummels' , 'akanji' , 'guererou' , 'pischek' , 'withsel' , 'can' , 'torgan' , 'sancho' , ' reus' , ' holand '];
	var show = $('.p3');
	var j = 0;
	var k = 0;
	show.html(line[j]);
	for(k = 0 ; k <= 10 ; k++){
		show.fadeToggle(1000,function(){
		j++;
		$(show).fadeToggle(1000);
		show.html(line[j]);
	});	
	}*/
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
	//text-slide
	var names = ['stadium : westfolen','coach : favre','capitan : marco reus'];
	var info = $('.p2');
	var i = 0;
	info.html(names[i]);
	$('#next').click(function(){
		if(!$(this).hasClass('not-allow')){
		i++;
		info.fadeToggle(300,function(){
			info.fadeToggle();
			info.html(names[i]);
		});
		$('#prev').removeClass('not-allow');
		$('#prev').addClass('allow');
	}
		if( i > 1){
			$('#next').removeClass('allow');
			$('#next').addClass('not-allow');
		}
	});
	$('#prev').click(function(){
		if(!$('#prev').hasClass('not-allow')){
			i--;
			info.fadeToggle(300,function(){
				info.fadeToggle();
				info.html(names[i]);
			});
			$('#next').removeClass('not-allow');
			$('#next').addClass('allow');
		}
		if(i < 1 ){
				$('#prev').removeClass('allow');
				$('#prev').addClass('not-allow');
			}
	});
	//pic slide
	$(window).scroll(function(){
		var scroll = $(this).scrollTop();
		if(scroll > $('.pic').offset().top - 100 ){
			$('.in-pic').each(function(i){
				setTimeout(function(){
					$('.in-pic').eq(i).addClass('show');	
				},500*(i+1));
			});
		}
				});
	$('.next').click(function(){
		var img = $('.box');
		img.animate({
			left:'0%'
		},1000,function(){
			img.css('left','-100%');
		$('.img').first().before($('.img').last());
		});
	});
	$('.prev').click(function(){
		var img = $('.box');
		img.animate({
			left:'-200%'
		},1000,function(){
			img.css('left','-100%');
		$('.img').last().after($('.img').first());
		});
	});
	$('.but').click(function(){
		var inp = $('#inp');
		var but = $('.but');
		var amount = inp.val();
		$('.modal').fadeToggle();
		$('body').append('<div class="body2"></div>');
		if(amount == 'bees'){
			window.setTimeout(function(){
			$('.modal p').html('thats right');
		},500);
		}else{
			window.setTimeout(function(){
			$('.modal p').html('wrong');
		},500);
		}
		$('.body2').click(function(){
			$('.modal').fadeToggle();
			amount = ' ';
			$('.modal p').html(amount);
			$(this).remove();
		});
	});
});