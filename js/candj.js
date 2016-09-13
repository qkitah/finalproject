$(document).on("ready",function(){
	$(".menu").on("click",function(e){
		e.preventDefault();
		var scrollTime = 500;
 		// link_home should point to firstpage
 		//link_about should point to second page
  		//link_expertise should point to third page
  		if( $(this).hasClass("link_coffees") ){
  			$.scrollTo(".coffees", scrollTime,{
  			// offset: -100
  			});
  		} else if ($(this).hasClass("link_about") ){
  			$.scrollTo(".pageabout",scrollTime)
  		} else if ($(this).hasClass("link_home") ){
  			$.scrollTo(".landing-pname",scrollTime)
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

  $(".interview").on("click",function(e){
    e.preventDefault();
    var scrollTime = 500;
    // link_home should point to firstpage
    //link_about should point to second page
      //link_expertise should point to third page
      if( $(this).hasClass("link_pati") ){
        $.scrollTo(".patigarcia", scrollTime,{
        // offset: -100
        });
      } else if ($(this).hasClass("link_adri") ){
        $.scrollTo(".adriurbina",scrollTime)
      }
      // } else if ($(this).hasClass("link_home") ){
      //   $.scrollTo(".landing-pname",scrollTime)
      // }else if ($(this).hasClass("link_thingsILike") ){
      //   $.scrollTo(".forthpage",scrollTime)
      // }else if ($(this).hasClass("link_contact") ){
      //   $.scrollTo(".fifthpage",scrollTime)} 
    }); 

});	  		