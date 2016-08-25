var scrollTime = 500;

$(document).ready(function(){
	$('.carousel').carousel({
	 interval: 1500
		});
	$(".modal_wrapper").click(function(e){
		//console.log(e.target.className);
	if( e.target.className == "modal_wrapper"){
	$("body").removeClass("aboutbox-on");	
	}
	});

	$(".activate-aboutbox").click(function(e){
		e.preventDefault();//don't follow the link
		console.log( e );
		$("body").addClass("aboutbox-on");
	})
	$(".close").click(function(e){
		e.preventDefault();
		$("body").removeClass("aboutbox-on");
		
	});
		
//pics of NY//
	$(".meal").on("click",function(e){
	    e.preventDefault();
	      var scrollTime = 500;
	      if( $(this).hasClass("link_brunch") ) {
	        $.scrollTo("#brunch_places",scrollTime,{
	      
	        });
	      } else if( $(this).hasClass("link_lunch") ) {
	        $.scrollTo("#lunch_places",scrollTime);
	      } else if( $(this).hasClass("link_dinner") ) {
	        $.scrollTo("#dinner_places",scrollTime);
	      }else if( $(this).hasClass("link_bar") ) {
	        $.scrollTo("#bar_places",scrollTime);
	      }

	});

//pics of SF//
	$(".place").on("click",function(e){
	    e.preventDefault();
	    
	      if( $(this).hasClass("link_mission") ) {
	        $.scrollTo("#mission_places",scrollTime,{
	        });
	      } else if( $(this).hasClass("link_hayes") ) {
	        $.scrollTo("#hayes_places",scrollTime);
	      } else if( $(this).hasClass("link_tenderloin") ) {
	        $.scrollTo("#tenderloin_places",scrollTime);
	      }else if( $(this).hasClass("link_fillmore") ) {
	        $.scrollTo("#fillmore_places",scrollTime);
	      }

	});

	$(".subheading").on("click",function(e){
		console.log(this)
	    e.preventDefault();
	      var scrollTime = 500;  
	      if( $(this).hasClass("link_NYC") ) {
	        $.scrollTo("#NYC_meals",scrollTime,{
	      
	        });
	    } else if( $(this).hasClass("link_SFO") ) {
	        $.scrollTo("#SFO_meals",scrollTime);
	  
	    }

	});

	//click listener for arrows//

	$(".emph.menu").on("click",function(){
		console.log(this,this.id)
		if(this.id=="nycarrow"){
			$.scrollTo(".page2",scrollTime);
		}else if (this.id=="sfoarrow"){
			$.scrollTo(".page7",scrollTime);
		}else if (this.id=="toparrow"){
			$.scrollTo(".whitewall",scrollTime);
		}	
	});
//arrow to NYC menu//	
	$(window).scroll(function(){
		if(window.scrollY>=1300 && window.scrollY<9695){
			$("#nycarrow").addClass("stickyarrow")
		}else{
			$("#nycarrow").removeClass("stickyarrow")
		}
//arrow to SFO menu//
		if(window.scrollY>=10670){
			$("#sfoarrow").addClass("stickyarrow")
		}else{
			$("#sfoarrow").removeClass("stickyarrow")
		}
//arrow to landing page menu//
		if(window.scrollY>=1300){
			$("#toparrow").addClass("stickyarrow")
		}else{
			$("#toparrow").removeClass("stickyarrow")
		}
	});

});
