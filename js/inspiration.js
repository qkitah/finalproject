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

	$(".menu").on("click",function(e){
		e.preventDefault();
		var scrollTime = 500;
 		// link_home should point to firstpage
 		//link_about should point to second page
  		//link_expertise should point to third page
  		if( $(this).hasClass("link_home") ){
  			$.scrollTo(".flower", scrollTime,{
  			offset: -100
  			});
  		} else if ($(this).hasClass("link_about") ){
  			$.scrollTo(".secondpage",scrollTime)
  		} else if ($(this).hasClass("link_skills") ){
  			$.scrollTo(".thirdpage",scrollTime)
  		}else if ($(this).hasClass("link_thingsILike") ){
        $.scrollTo(".forthpage",scrollTime)
      }else if ($(this).hasClass("link_contact") ){
        $.scrollTo(".fifthpage",scrollTime)} 
  	 }); 	


	$(window).on("scroll",function(){
	if( window.scrollY > 500) {
       // $("#social_media").css("position","absolute");
       // $("#social_media").css("top","420px");
       $("#toparrow").addClass("stickyarrow");
     } else { //window.scrollY >= 403
       // $("#social_media").css("position", "fixed");
       // $("#social_media").css("top","36px");
       $("#toparrow").removeClass("stickyarrow");
     }
   });

});	