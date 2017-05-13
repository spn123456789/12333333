// 新闻轮播
var x=-20
setInterval(function(){
	$('#new').animate({top:x},"slow");
	x+=-20;
	if(x==-80){
		x=0;
	}
},4000)
window.onload=function () {
	// 首页开始动画
	$('.nine').animate({left:20,opacity:1},800);
	$('.year').animate({right:-50,opacity:1},800);


	// 鼠标阴影移动
	var aLi=$('#for li');
	var oLi=$('#act');
	var oUl=$('#for');
	aLi.mouseenter(function(){
		var shaw=$(this).index();
		if(shaw<=5){
			oLi.css({top:20,left:(shaw-1)*232+20});
		}else{
			oLi.css({top:171,left:(shaw-6)*232+20});
		}
	})

	oUl.on('mouseenter mouseleave',function(){
		oLi.toggle();
	})

	// 侧边隐藏
	var oK = $('.ok');
	var nav = $('.nav_broadside');
	var off = true;
	oK.on('click',function(){
		if(off){
			oK.css('backgroundPosition', '-33px -640px');
			nav.css('right','-70px');
		}else{
			oK.css('backgroundPosition', '-1px -640px');
			nav.css('right','0px');
		}
		off = !off;
	})
	var oDown = $('.down');
	var oDwn = $('.dwn');
	var oUp = $('.up');
	var off2 =true;
	oDwn.on('click',function (e) {
			e.preventDefault();
		$.fn.fullpage.moveSectionDown();
	});
	oDown.on('click',function (e) {
		if (off2) {
			e.preventDefault();
		$.fn.fullpage.moveSectionDown();
		}
	});
	oUp.on('click',function (e) {
		if (off2) {
			e.preventDefault();
		$.fn.fullpage.moveSectionUp();
		}
	})

	// tab切换
	var tLi = $('.ul3 li');
	var tDiv = $('.content1');
	var tAct = $('.active1')
	// tLi.on('mouseenter',function(){
	// 	var tIndex = $(this).index();
	// 	tLi.each(function(i,ele){
	// 		$(ele).removeClass('holi');
	// 	})
	// 	if(tIndex == 0){
	// 		tAct.css('top','0px');
	// 		$(this).addClass('holi');
	// 		tDiv.css('left','0px');
	// 	}
	// 	if(tIndex == 1){
	// 		tAct.css('top','50px');
	// 		$(this).addClass('holi');
	// 		tDiv.css('left','-480px');
			
	// 	}
	// 	if(tIndex == 2){
	// 		tAct.css('top','100px');
	// 		$(this).addClass('holi');
	// 		tDiv.css('left','-960px');
			
	// 	}

	// })
	tLi.on('mouseover',function(){
		var tIndex = $(this).index();
		tLi.removeClass('holi');
		$(this).addClass('holi');
		tAct.css('top',(tIndex*50)+'px');
		$('.content1').css('transform','translate3d('+(-480*tIndex-480)+'px,0px,0px)');
	})
	var swiper2 = new Swiper('.more-container',{
		onSlideChangeStart:function(swiper){
			var q = swiper.realIndex;
			tLi.removeClass('holi');
			tLi.eq(q).addClass('holi');
			tAct.css('top',(q*50)+'px');
		},
		loop:true,
		centeredSlides:true,
		autoplay: 2500,
		autoplayDisableOnInteraction: false
	})
}
	


