$('.top ul div').hover(function(){
  var index=$(this).index();
  $(this).addClass('current')
  $(this).siblings('').removeClass('current')
  $(this).children().toggle()
})
$('.con').hover(function(){
  $('.con span').toggle()
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

