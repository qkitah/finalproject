$(document).ready(function(){
	// $('.carousel').carousel({
	//  interval: 1500
	// 	});
	// $(".modal_wrapper").click(function(e){
	// 	//console.log(e.target.className);
	// if( e.target.className == "modal_wrapper"){
	// $("body").removeClass("aboutbox-on");	
	// }
	// });

	$(".activate-aboutbox").click(function(e){
		e.preventDefault();//don't follow the link
		console.log( e );
		$("body").addClass("aboutbox-on");
	})
	$(".close").click(function(e){
		e.preventDefault();
		$("body").removeClass("aboutbox-on");
		
	});
});	