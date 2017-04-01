function paralax(){
		
		/* Scroll event handler */
		$(window).bind('scroll',function(e){
			parallaxScroll();
		});
		
	   
		/* Next/prev and primary nav btn click handlers */
		$('a.first').click(function(){
				$('body,html').animate({
					scrollTop: $('#first').offset().top
				}, 1000, function() {
					parallaxScroll(); // Callback is required for iOS
				});
			
				return false;
			});
			$('a.second').click(function(){
				$('body,html').animate({
					scrollTop:$('#second').offset().top
				}, 1000, function() {
					parallaxScroll(); // Callback is required for iOS
				});
				return false;
			});
			$('a.third').click(function(){
				$('html,body').animate({
					scrollTop:$('#third').offset().top
				}, 1000, function() {
					parallaxScroll(); // Callback is required for iOS
				});
				return false;
			});
			$('a.fourth').click(function(){
				$('html, body').animate({
					scrollTop:$('#fourth').offset().top
				}, 1000, function() {
					parallaxScroll(); // Callback is required for iOS
				});
				return false;
			});
			
			$('a.fifth').click(function(){
				$('html, body').animate({
					scrollTop:$('#fifth').offset().top
				}, 1000, function() {
					parallaxScroll(); // Callback is required for iOS
				});
				return false;
			});

		
	
	
	/* Scroll the background layers */
	function parallaxScroll(){
		var scrolled = $(window).scrollTop();
		$('#parallax-bird').css('top',(0-(scrolled*0.25))+'px');
		$('#parallax-cloud').css('top',(0-(scrolled*0.1))+'px');
	}
};