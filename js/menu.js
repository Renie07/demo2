$(document).ready(function(){ 
	var touch 	= $('#touch-menu');
	var menu 	= $('.main-navigation');

	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
	
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 917 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
	
});


$(document).ready(function () {
 $('input,textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
   $(this).attr('placeholder','');
 });
 $('input,textarea').blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
 });
 });


	$(document).ready(function(){
	        var $menu = $("#bar-nav");
     $(window).scroll(function(){
   if ( $(this).scrollTop() > 180 && $menu.hasClass("default") ){
	                $menu.removeClass("default").addClass("fixed");
	            } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
     $menu.removeClass("fixed").addClass("default");

	            }
	        });//scroll
	    });



