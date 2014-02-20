$(function () {
  // vars for carousel
  var $textCarousel = $('#testimonial-list');
  var textCount = $textCarousel.children().length;
  var quoteWidth = $('.carousel-wrap li').first().width();
  console.log(quoteWidth);
  var wrapWidth = (textCount * quoteWidth) + quoteWidth;
  console.log(wrapWidth);
  $textCarousel.css('width', wrapWidth);
  var animationTime = 750; // milliseconds for clients carousel
  var fadeTime = 500;

  // prev & next btns for testimonials
  $('#prv-testimonial').on('click', function(){
    var $last = $('#testimonial-list li:last');
    $last.remove().css({ 'margin-left': '-1106px' });
    $('#testimonial-list li:first').before($last);
    $last.fadeOut(fadeTime, function(){
    	//$last.animate({ 'margin-left': '0px' }, animationTime, 'swing', function(){
    	//	$last.css('opacity', '1');
    	//});
    });
  });

  $('#nxt-testimonial').on('click', function(){
    var $first = $('#testimonial-list li:first');
    $first.animate({ 'margin-left': '-1106px' }, animationTime, function() {
      $first.remove().css({ 'margin-left': '0px' });
      $('#testimonial-list li:last').after($first);
    });
  });

});
