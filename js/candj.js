$(document).on("ready",function(){
	$(".menu").on("click",function(e){
		e.preventDefault();
		var scrollTime = 500;
 		// link_home should point to firstpage
 		//link_about should point to second page
  		//link_expertise should point to third page
  		if( $(this).hasClass("link_coffees") ){
  			$.scrollTo(".coffees", scrollTime,{
  			offset: -100
  			});
  		} else if ($(this).hasClass("link_about") ){
  			$.scrollTo(".pageabout",scrollTime)
  		} else if ($(this).hasClass("link_skills") ){
  			$.scrollTo(".thirdpage",scrollTime)
  		}else if ($(this).hasClass("link_thingsILike") ){
        $.scrollTo(".forthpage",scrollTime)
      }else if ($(this).hasClass("link_contact") ){
        $.scrollTo(".fifthpage",scrollTime)} 
  	}); 
});	  		