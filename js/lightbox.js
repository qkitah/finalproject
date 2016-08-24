//lightbox controls//
$(document).on("ready",function(){
	$("#lightbox button").on('click',function(){
	//we want to close lightbox//
	$("body").removeClass("overlay");
	$("#lightbox").slideUp(2000);
		
	});
});

