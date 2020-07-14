$('.top ul div').hover(function(){
	var index=$(this).index();
	$(this).addClass('current')
	$(this).siblings('').removeClass('current')
	$(this).children().toggle()
})
$('.con').hover(function(){
	$('.con span').toggle()
})
var num=0;
var timer;
function gogo(){
	clearInterval(timer);
	timer=setInterval(function(){
		num++;
		if(num>4){
			num=0;
		}
      $('.con ul li').eq(num).children().fadeIn()
       $('.con ul li').eq(num).siblings().children().fadeOut()
      $('.con ol li').eq(num).addClass('current')
      $('.con ol li').eq(num).siblings().removeClass('current')

	},2000)
}
  gogo();
  $('.con').hover(function(){
  	clearInterval(timer)
  },function(){
  	gogo();
  })

  $('#left').click(function(){
  	    num--;
		if(num<0){
			num=4;
		}
      $('.con ul li').eq(num).children().fadeIn()
       $('.con ul li').eq(num).siblings().children().fadeOut()
      $('.con ol li').eq(num).addClass('current')
      $('.con ol li').eq(num).siblings().removeClass('current')

  })
  $('#right').click(function(){
  	num++;
		if(num>4){
			num=0;
		}
      $('.con ul li').eq(num).children().fadeIn()
       $('.con ul li').eq(num).siblings().children().fadeOut()
      $('.con ol li').eq(num).addClass('current')
      $('.con ol li').eq(num).siblings().removeClass('current')

  })

  $('.con ol li').click(function(){
  	num=$(this).index();
  	$('.con ul li').eq(num).children().fadeIn()
    $('.con ul li').eq(num).siblings().children().fadeOut()
    $('.con ol li').eq(num).addClass('current')
    $('.con ol li').eq(num).siblings().removeClass('current')
  })

  $('.munu').hover(function(){
  	$('.munu ol').toggle()
  })
  $('.munu ol li1').mouseenter(function(){
  	$(this).css({'background':'white','color':'red'})
  })
  $('.munu ol li1').mouseenter(function(){
  	$(this).siblings().css({'color':'white','background-image': 'linear-gradient(to right, red , #f06)'})
  })

$('.munu ol li').hover(function(){
	$(this).children('div').show()
},function(){
	$(this).children('div').hide()
})
$('.span3').hover(function(){
	$('#span4').css('transform','rotate(360deg)')
},function(){
	$('#span4').css('transform','rotate(0deg)')
})
$('.span3').hover(function(){
	$('.span3').css('textDecoration','underline')
},function(){
	$('.span3').css('textDecoration','none')
})

var m=0;
var time;
function gogo(){
	clearInterval(time);
	time=setInterval(function(){
		m++;
		if(m>2){
			m=0;
		}
      $('.nav1 .banner1 ul li').eq(m).children().fadeIn()
       $('.nav1 .banner1 ul li').eq(m).siblings().children().fadeOut()
      $('.nav1 .banner1 ul li').eq(m).addClass('jindu')
      $('.nav1 .banner1 ul li').eq(m).siblings().removeClass('jindu')

	},2000)
}
  gogo();
  $('.nav1 .banner1').hover(function(){
  	clearInterval(time)
  },function(){
  	gogo();
  })

  $('.nav1 .banner1').hover(function(){
	$('.nav1 .banner1 span').toggle()
})

   $('#left1').click(function(){
  	    num--;
		if(m<0){
			m=2;
		}
      $('.nav1 .banner1 ul li').eq(m).children().fadeIn()
       $('.nav1 .banner1 ul li').eq(m).siblings().children().fadeOut()
      $('.nav1 .banner1 ul li').eq(m).addClass('jindu')
      $('.nav1 .banner1 ul li').eq(m).siblings().removeClass('jindu')

  })
  $('#right1').click(function(){
  	m++;
		if(m>2){
			m=0;
		}
      $('.nav1 .banner1 ul li').eq(m).children().fadeIn()
       $('.nav1 .banner1 ul li').eq(m).siblings().children().fadeOut()
      $('.nav1 .banner1 ul li').eq(m).addClass('jindu')
      $('.nav1 .banner1 ul li').eq(m).siblings().removeClass('jindu')
  })
  $('.hot ul').children().hover(function(){
  	$(this).children('span').toggle()
  })
  $('.hot1 ul').children().hover(function(){
  	$(this).children('span').toggle()
  })
  $('.hot2 ul').children().hover(function(){
  	$(this).children('span').toggle()
  })
  $('.hot3 ul').children().hover(function(){
  	$(this).children('span').toggle()
  })
  $('.hot4 ul').children().hover(function(){
  	$(this).children('span').toggle()
  })
  $('.hot5 ul').children().hover(function(){
  	$(this).children('span').toggle()
  })
    $('.hot6 ul').children().hover(function(){
  	$(this).children('span').toggle()
  })
    $('.hot7 ul').children().hover(function(){
  	$(this).children('span').toggle()
  })
    $('.hot8 ul').children().hover(function(){
  	$(this).children('span').toggle()
  })
    $('.hot9 ul').children().hover(function(){
  	$(this).children('span').toggle()
  })
    $('.hot10 ul').children().hover(function(){
  	$(this).children('span').toggle()
  })
    $('.genju .box ul li a').hover(function(){
    	$(this).css('textDecoration','underline')
    },function(){
    	$(this).css('textDecoration','none')
    })
    $('#weibo').hover(function(){
    	$('.content .bottom .wechat .img1').toggle()
    })
     $('#weixin').hover(function(){
    	$('.content .bottom .wechat .img2').toggle()
    })

//      $('.introduce .atten .attention').mouseenter(function(){
// 	$('.introduce .atten .attention').hide()
// 	$('.introduce .atten .noneattention').show()
// })