$(document).on("ready",function(){
	$(window).on("scroll",function(){

		 if( window.scrollY < 403 ) {
       // $("#social_media").css("position","absolute");
       // $("#social_media").css("top","420px");
       $(".socialmedia").removeClass("sticky");
     } else { //window.scrollY >= 403
       // $("#social_media").css("position", "fixed");
       // $("#social_media").css("top","36px");
       $(".socialmedia").addClass("sticky");
     }

     	if(window.scrollY < 624 ){
     	$("header").css("background-color", "rgba(255,255,255,0)").css("color","rgb(105,105,105)");
     	} else
     	$("header").css("background-color", "rgba(105,105,105,0.75)").css("color","#fff");
   });

	$(".menu").on("click",function(e){
		e.preventDefault();
		var scrollTime = 500;
 		// link_home should point to firstpage
 		//link_about should point to second page
  		//link_expertise should point to third page
  		if( $(this).hasClass("link_home") ){
  			$.scrollTo(".firstpage", scrollTime,{
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

	if( window.scrollY > 440) {
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

