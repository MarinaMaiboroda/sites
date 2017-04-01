$(document).ready(function() {
	
	redrawDotNav();
	
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		redrawDotNav();
    });
	
	var new_height = $('.white-bg').offset().top + $('.white-bg').outerHeight();
	if ($(window).width() >= 992){
		$('body').css("height",new_height);
	}
    
	/* Next/prev and primary nav btn click handlers */
	if ($(window).width() >= 992){
		$('a.third-slide').click(function(){
			var next_section = $('#third-slide').offset().top - ($('#third-slide').height() / 2)
			$('html, body').animate({
				scrollTop: next_section
			}, 1000, function() {
				parallaxScroll(); // Callback is required for iOS
			});
			return false;
		});
		$('a.fourth-slide').click(function(){
			$('html, body').animate({
				scrollTop:$('#fourth-slide').offset().top - ($('#fourth-slide').height() / 2)
			}, 1000, function() {
				parallaxScroll(); // Callback is required for iOS
			});
			return false;
		});
		$('a.fifth-slide').click(function(){
			$('html, body').animate({
				scrollTop:$('#fifth-slide').offset().top - ($('#fifth-slide').height() / 2)
			}, 1000, function() {
				parallaxScroll(); // Callback is required for iOS
			});
			return false;
		});
		$('a.sixth-slide').click(function(){
			$('html, body').animate({
				scrollTop:$('#sixth-slide').offset().top - ($('#sixth-slide').height() / 2)
			}, 1000, function() {
				parallaxScroll(); // Callback is required for iOS
			});
			return false;
		});
		
		$('a.seventh-slide').click(function(){
			$('html, body').animate({
				scrollTop:$('#name-6').offset().top
			}, 1000, function() {
				parallaxScroll(); // Callback is required for iOS
			});
			return false;
		});
	}else{
		$('a.third-slide').click(function(){
			var next_section = $('#name-2').offset().top
			$('html, body').animate({
				scrollTop: next_section
			}, 1000, function() {
				parallaxScroll(); // Callback is required for iOS
			});
			return false;
		});
		$('a.fourth-slide').click(function(){
			$('html, body').animate({
				scrollTop:$('#name-3').offset().top
			}, 1000, function() {
				parallaxScroll(); // Callback is required for iOS
			});
			return false;
		});
		$('a.fifth-slide').click(function(){
			$('html, body').animate({
				scrollTop:$('#name-4').offset().top
			}, 1000, function() {
				parallaxScroll(); // Callback is required for iOS
			});
			return false;
		});
		$('a.sixth-slide').click(function(){
			$('html, body').animate({
				scrollTop:$('#name-5').offset().top
			}, 1000, function() {
				parallaxScroll(); // Callback is required for iOS
			});
			return false;
		});
		
		$('a.seventh-slide').click(function(){
			$('html, body').animate({
				scrollTop:$('#name-6').offset().top
			}, 1000, function() {
				parallaxScroll(); // Callback is required for iOS
			});
			return false;
		});
		}
	
	 var height = $(window).height();
	 $('#branding').addClass('active');
			if ($('#branding').height() < height){
				$('#branding').height(height);
				$('body').css('background-position', 'top ' + height + 'px center');
				}
			else{
				$('body').css('bacground-position', 'top'+ $('#branding').height() +'px center');
			}
			
			$('#parallax-bird').css('top', $('#branding').height() );			
			$('#parallax-cloud').css('top', $('#branding').height() );
			
			var owl = $("#our-team");
 
			owl.owlCarousel({
				items : 3, //10 items above 1000px browser width
				itemsDesktop : [1000,3], //5 items between 1000px and 901px
				itemsDesktopSmall : [900,3], // betweem 900px and 601px
				itemsTablet: [800,2], //2 items between 600 and 0
				itemsMobile : [600,1] // itemsMobile disabled - inherit from itemsTablet option
			  });
 
			  // Custom Navigation Events
			  $(".next").click(function(){
				owl.trigger('owl.next');
			  })
			  $(".prev").click(function(){
				owl.trigger('owl.prev');
			  })

				var tempScrollTop = 0,currentScrollTop = 0;
				var check_way = false;
				var scrollId;

				var way = "default"; // направление
				function showWay(str){
	
					var nav = $('#primary a');
					$.each(nav, function(i, e){
						if ( $(this).hasClass('active') ){
							$(this).removeClass('active');
							var k = ( str == "down" ? i+1 : i-1 );
							$(nav[k]).addClass('active').trigger('click');
							return false;
						}
					});
				}
				
				$(window).scroll(function(){
	
			    currentScrollTop = $(window).scrollTop();
			    if (tempScrollTop < currentScrollTop){
			        way= "down"; // крутнули вниз колесо
            		if(check_way){
            			check_way = true;
            			showWay(way);
        			}
			    } else if (tempScrollTop > currentScrollTop){
			        way= "up"; // крутнули вверх колесо
            		if(check_way){
            			check_way = true;
            			showWay(way);
       				 }
			    }
			    tempScrollTop = currentScrollTop;
				setTimeout(function(){showWay = false;}, 3000);


				/**Img animation****/
				var height = $(window).height();	
				if ( ($(this).scrollTop()+height) >= $("#bg1").offset().top) {
					$("#bg1").addClass('animated zoomIn');
				} 
				if ( ($(this).scrollTop()+height) >= $("#bg2").offset().top) {
					$("#bg2").addClass('animated zoomIn');
				} 
				if ( ($(this).scrollTop()+height) >= $("#bg3-1").offset().top) {
					$("#bg3-1").addClass('animated slideInLeft');
				} 
	
				if ( ($(this).scrollTop()+height) >= $("#bg3-2").offset().top) {
					$("#bg3-2").addClass('animated slideInLeft');
				} 
				if ( ($(this).scrollTop()+height) >= $("#bg4").offset().top) {
					$("#bg4").addClass('animated slideInRight');
				} 
				if ( ($(this).scrollTop()+height) >= $("#bg5-1").offset().top) {
					$("#bg5-1").addClass('animated slideInLeft');
				} 
	
				if ( ($(this).scrollTop()+height) >= $("#bg5-2").offset().top) {
					$("#bg5-2").addClass('animated slideInLeft');
				} 
							if ( ($(this).scrollTop()+height) >= $("#bg6").offset().top) {
					$("#bg6").addClass('animated slideInRight');
				} 
							
		});
});
	


/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-bird').css('top',(0-(scrolled*.5))+'px');
	$('#parallax-cloud').css('top',(0-(scrolled*.45))+'px');
}

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
	var section1Top =  0;
	// The top of each section is offset by half the distance to the previous section.
	var section2Top =  $('#name-1').offset().top
	var section3Top =  $('#third-slide').offset().top - ($('#third-slide').height() / 2)
	var section4Top =  $('#fourth-slide').offset().top - ($('#fourth-slide').height() / 2)
	var section5Top =  $('#fifth-slide').offset().top - ($('#fifth-slide').height() / 2)
	var section6Top =  $('#sixth-slide').offset().top - ($('#sixth-slide').height() / 2)
	var section7Top =  $('#name-6').offset().top
	$('nav#primary a').removeClass('active');
	if ($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('nav#primary a.top').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('nav#primary a.first-slide').addClass('active');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
		$('nav#primary a.third-slide').addClass('active');
	} else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){
		$('nav#primary a.fourth-slide').addClass('active');
	} else if ($(document).scrollTop() >= section5Top && $(document).scrollTop() < section6Top){
		$('nav#primary a.fifth-slide').addClass('active');
	} else if ($(document).scrollTop() >= section6Top && $(document).scrollTop() < section7Top){
		$('nav#primary a.sixth-slide').addClass('active');
	} else if ($(document).scrollTop() >= section7Top){
		$('nav#primary a.seventh-slide').addClass('active');
	}
	
}
