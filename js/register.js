// var oyou=document.getElementById('you');
// oyou.onmouseenter=function(){
// 	this.style.color="red";
// }
$('#you').click(function(){
	$('.zhuce').hide()
	$('.mailbox').show()
	$('.mailbox .you').css('color','#e31436')
	$('.mailbox .shou').css('color','black')
})
$('.mailbox .shou').click(function(){
	$('.zhuce').show()
	$('.mailbox').hide()
	$('.zhuce .shou').css('color','#e31436')
})