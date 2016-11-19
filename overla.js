// ------------------------------------------------------------------------
// Blog: Nav Overlay
// ------------------------------------------------------------------------
$(document).ready(function(){
    var $overlay = $('.nav-overlay');
    $('.nav-open').click(function(){
        if ( $overlay.is(':visible') ) {
            $overlay.fadeOut();
        } else {
            $overlay.fadeIn();
        }           
    });
    
    $('.nav-close').click(function(){
        $overlay.fadeOut();
    });

});

// ------------------------------------------------------------------------
// Blog: Search Overlay
// ------------------------------------------------------------------------
$(document).ready(function(){
    var $overlay = $('.search-overlay');
    $('.search-open').click(function(){
        if ( $overlay.is(':visible') ) {
            $overlay.fadeOut();
        } else {
            $overlay.fadeIn();
        }           
    });
    
    $('.search-close').click(function(){
        $overlay.fadeOut();
    });

});

// ------------------------------------------------------------------------
// Blog: FitVids.js integration
// ------------------------------------------------------------------------

$(document).ready(function(){
  // Target your .container, .wrapper, .post, etc.
  $(".blog-content").fitVids();
});