$(document).ready(function () {
	
	// smooth scrolling to the anchor
    $('a[href^=\\#]').on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
        return false;
    });

});