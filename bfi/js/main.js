function setEqualHeight(columns) { 
    var tallestcolumn = 0; 
    columns.each( 
        function(){ currentHeight = $(this).height(); 
            if(currentHeight > tallestcolumn){ 
                tallestcolumn = currentHeight; 
            } 
        } ); 
columns.height(tallestcolumn); 
} 

function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-1').css('top',(150+(scrolled*.35))+'px') + 200;
	$('#parallax-2').css('top',(250+(scrolled*.25))+'px') + 600;
    $('#parallax-3').css('top',(150+(scrolled*.25))+'px') + 600;
}

function topOffset(){
    //$('#section-img1').css('top', ($('#first').offset().top)*0.4 + 400 + 'px');
}

function mainOffsetTop(){
    var blockHeight = $('.tuning-body').height() + $('header').height();
    $('.main-block .main-absolute').css('margin-top', blockHeight);
}
    
    $(document).ready(function(){
        
    });

    $(window).load(function(){
        $('.flexslider').flexslider({
            animation: "slide",
            slideshow: true,
            slideshowSpeed: 5000,
            pauseOnAction: false,
            start: function(slider){
            $('body').removeClass('loading');
            }
        });
        
        /* equal height */  
        $('.workout-blog-equal, .equal-welcome-bfi').each(function(){
            $(this).css('height', 'auto');
        });
                    
        setEqualHeight($('.equal-welcome-bfi'));        
        
        setEqualHeight($('.workout-blog-equal'));
        /* End equal height */
        
        /* main-absolute margin */
        mainOffsetTop();
        /* End main-absolute margin */
        
        parallaxScroll();
                
    });
    
    $(window).resize(function(){
        /* equal height */
        $('.workout-blog-equal, .equal-welcome-bfi').each(function(){
            $(this).css('height', 'auto');
        });
        
        setEqualHeight($('.equal-welcome-bfi'));        
        
        setEqualHeight($('.workout-blog-equal'));
        /* End equal height */
        
        /* main-absolute margin */
        mainOffsetTop();
        /* End main-absolute margin */
                
    });
    
    $(window).bind('scroll',function(e){
    	parallaxScroll();
    });