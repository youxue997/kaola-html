$('.top ul div').hover(function(){
	var index=$(this).index();
	$(this).addClass('current')
	$(this).siblings('').removeClass('current')
	$(this).children().toggle()

})
$('.top ul .yu').mouseenter(function(){
	$(this).css('color','red')
})
