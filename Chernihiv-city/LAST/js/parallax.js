function paralax(){
		
        $(document).ready(function(){
            //parallaxScroll();
            topOffset();            
        });
        
        //window.onresize = topOffset();
        //window.onresize = parallaxScroll();
        
		/* Scroll event handler */
		$(window).bind('scroll',function(e){
            topOffset();
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
        
        $('#section-images-1').css('top',(0-(scrolled*0.4))+'px');
        $('#section-images-2').css('top',(0-(scrolled*0.15))+'px');
        $('#section-images-3').css('top',(0-(scrolled*0.8))+'px');
        $('#section-images-4').css('top',(0-(scrolled*0.5))+'px');
        $('#section-images-5').css('top',(0-(scrolled*0.75))+'px');
        $('#section-images-6').css('top',(0-(scrolled*0.7))+'px');
        $('#section-images-7').css('top',(0-(scrolled*0.55))+'px');
        $('#section-images-8').css('top',(0-(scrolled*0.8))+'px');
        $('#section-images-9').css('top',(0-(scrolled*0.7))+'px');
        
	}
    
    function topOffset(){
        $('#section-img1').css('top', ($('#first').offset().top)*0.4 + 400 + 'px');
        $('#section-img2').css('top', ($('#first').offset().top)*0.15 + 'px');
        $('#section-img3').css('top', ($('#second').offset().top)*0.8 + 200 + 'px');
        $('#section-img4').css('top', ($('#second').offset().top)*0.5 + 400 + 'px');
        $('#section-img5').css('top', ($('#third').offset().top)*0.75 + 300 + 'px');
        $('#section-img6').css('top', ($('#fourth').offset().top)*0.7 + 200 + 'px');
        $('#section-img7').css('top', ($('#fourth').offset().top)*0.55 + 350 + 'px');
        $('#section-img8').css('top', ($('#fourth').offset().top)*0.8 + 450 + 'px');
        $('#section-img9').css('top', ($('#fifth').offset().top)*0.7 + 350 + 'px');
    }
};