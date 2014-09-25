
$(document).ready(function(){

	$('#street-sound')[0].volume = 0.3;
	$('#street-sound')[0].play();

	$(".ryu").mouseenter(function(){
		$(".ryu-action").hide();
		$(".ryu-ready").show();
	})

	.mouseleave(function(){
		$(".ryu-action").hide();
		$(".ryu-still").show();
	})

	.mousedown(function(){
		playHadouken();
		$(".ryu-action").hide();
		$(".ryu-throwing").show();
		$(".hadouken").finish().show()
		.animate(
			{'left': '300px'},
			500,
			function () {
				$(this).hide();
				$(this).css('left', '-212px');
			}
		);
		
	})

	.mouseup(function(){
		$(".ryu-action").hide();
		$(".ryu-still").show();
	});

	$(document).keydown(function() {
		if(event.which == 88){
			$('#street-sound')[0].pause();
			playCool();
			$(".ryu-action").hide();
			$(".ryu-cool").show();
		}
	})

	.keyup(function(){
		$('#cool-sound')[0].pause();
		$('#cool-sound')[0].load();
		$(".ryu-action").hide();
		$(".ryu-still").show();
	});


});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function playCool () {
  $('#cool-sound')[0].volume = 0.5;
  //$('#cool-sound')[0].load();
  $('#cool-sound')[0].play();
}
