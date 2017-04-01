// JavaScript Document
	$(document).ready(function() {
        var height = $(window).height();
		var width = $(window).width();
		//$('#container').css('height', height);
		$('.left-column').css('height', height-76);
		$('#googlemaps').css('height', height-76);
		$('#last-news').css('height', height-148);
	});
	
	
	$(function(){
    	$(window).resize(function() {
        	var height = $(window).height();
			//$('#container').css('height', height);
			$('.left-column').css('height', height-76);
			$('#last-news').css('height', height-148);
			$('#googlemaps').css('height', height-76);
		 	});
	});
	
	$('#show-last-news').click(function(){
		if ($('.left-column').is(':visible')){
			$('.left-column').hide();
		}
		else{
			$('.left-column').show();
		}			
	});
	
	$('.dropdown-btn button').click(function(){
		if ($(this).next('.social-icon').is(':visible')){
			$(this).next('.social-icon').hide();
		}
		else{
			$(this).next('.social-icon').show();
		}			
	});
	
	