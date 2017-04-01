/**
 * Created by PC on 12.09.2016.
 */
function angle() {
    var w_width = window.innerWidth;
    var w_height = $(window).height();
    var head_height = $('header').height();
    var h = $('.first-screen').outerHeight();
    var right;
    if ((w_height > 750)) {
        h = w_height;
    }
    else {
       h = 750;
    }

    if (w_width > 768) {
        $('.first-screen').height(h);
        $('.page-content').height(h - head_height);
        $('.triangle').css({'border-left-width': w_width, 'border-bottom-width': h + 2, 'height': 'auto'});

        //Social icon position
        var tan = w_width / (h + 2);
        var top = head_height + 20;

        $('.social-icon a').each(function (index, element) {

            right = top * tan;

            $(this).css({'top': top, 'right': right});

            if (tan <= 1) {
                top = top + 48;
            } else if ((1 < tan) && (tan < 1.732)) {
                top = top + 33;
            } else {
                top = top + 20;
            }
        });
    } else {
        $('.triangle').height($('.first-screen').height());
        top = 34;
        right = 80;

        $('.social-icon a').each(function (index, element) {
            $(this).css({'top': top, 'right': right});
            right = right + $(this).width() +5;
        });
    }

    //$('.social-icon').css({'top': top, 'right' : right });
}

function block_height() {
    if (window.innerWidth > 768) {

        setTimeout(function() {
            var mainDivs = $(".new");
            var maxHeight = 0;

            for (var i = 0; i < mainDivs.length; ++i) {
                if (maxHeight < $(mainDivs[i]).height()) {
                    maxHeight = $(mainDivs[i]).height();
                }
            }

            for (var i = 0; i < mainDivs.length; ++i) {
                $(mainDivs[i]).height(maxHeight);
            }
            console.log(maxHeight);
        }, 100);

    }
    else {
        $(".new").css('height', 'auto');
    }
};

$('.humbrger-menu').click(function(){
    if ($('#top-menu').is(':visible')){
        $('#top-menu').hide(100);
        $(this).removeClass('open');
        $(this).find('span').removeClass('icon-x').addClass('icon-three-bars');
    }
    else{
        $('#top-menu').show(100);
        $(this).addClass('open');
        $(this).find('span').removeClass('icon-three-bars').addClass('icon-x');
    }
});

$(document).ready(function(){

    $(window).bind("load", function(){
        angle();
        block_height();
	if (window.innerWidth > 768) {
        	$('.main-photo').show();
	}
    });

    $(window).resize(function(){
        angle();
        block_height();
        var width = window.innerWidth;
        if (width > 768){
            $('#top-menu').show(100);
            $(this).find('span').removeClass('icon-cross').addClass('icon-menu');
        }
        else{
            if ($('.humbrger-menu').find('span').hasClass('icon-menu')){
                $(this).removeClass('open');
                $('#top-menu').hide(100);
            }
        }
    });

});