if(jQuery.browser.mozilla) { 
    $('html').css({"overflow": "hidden","height":"100%" });
	$('body').css({"overflow":"auto", "height": "100%" });
}

$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});

$(document).ready(function() {
 
	console.log($(window).height());
	console.log($(window).width());
	
	$('.height-block').css('height', $(window).height());
	$('#menu-panel').css('height', $(window).height());
	
	if (device.desktop()){
		$('head').append('<link rel="stylesheet" media="all" href="css/parallax.css"/>');
		paralax();
	}else if (device.tablet() || device.mobile()){
		$('head').append('<link rel="stylesheet" media="all" href="css/mobile.css"/>');
	}

	$('#show-menu').click(function(){
		if ($(this).hasClass('open')){
			$('#menu-panel').removeClass('show-block').addClass('hidden-block').parent().removeClass('block');
			$(this).removeClass('open');
		}
		else{
			$(this).addClass('open');
			$('#menu-panel').removeClass('hidden-block').addClass('show-block').parent().addClass('block');
		}					
	});
	
	$('.item a.read-more').click(function(){
		var active_id = $(this).attr();
		console.log(active_id);
		alert(active_id);
	});
});

$(window).resize(function() {
	$('.height-block').css('height', $(window).height());
	if($(window).width() > 992){
		$('#menu-panel').removeClass('hidden-block').removeClass('show-block');
                            $(this).removeClass('open');
	}
	if($(window).width() > 992){
		$('#menu-panel').addClass('hidden-block').removeClass('show-block');
                            $(this).removeClass('open');
	}
});

$(document).scroll(function() {
	if($(window).width() > 992){
		checkOffset();
	}
});


/*Stop Show Left Menu on footer*/
    function checkOffset() {
        if($('#menu-panel').offset().top + $('#menu-panel').height() >= $('.content-footer').offset().top - 200)
            $('#menu-panel').css('position', 'absolute');
        if($(document).scrollTop() + window.innerHeight < $('.content-footer').offset().top + 200)
            $('#menu-panel').css('position', 'fixed'); // restore when you scroll up
    }
/*End Stop Show Left Menu on footer*/
