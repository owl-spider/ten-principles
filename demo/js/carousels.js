$(function(){
  // vars for testimonials carousel
  var $txtcarousel = $('#testimonial-list');
  var txtcount = $txtcarousel.children().length;
  var quoteWidth = $('.carousel-wrap li').get(0).css("width");
  var wrapwidth = (txtcount * quoteWidth) + quoteWidth; // 700px width for each testimonial item
  $txtcarousel.css('width',wrapwidth);
  var animtime = 750; // milliseconds for clients carousel
  var fadetime = 500;
 
  // prev & next btns for testimonials
  $('#prv-testimonial').on('click', function(){
    var $last = $('#testimonial-list li:last');
    $last.remove().css({ 'margin-left': '-1106px' });
    $('#testimonial-list li:first').before($last);
    $last.fadeOut(fadetime, function(){
    	//$last.animate({ 'margin-left': '0px' }, animtime, 'swing', function(){
    	//	$last.css('opacity', '1');
    	//});
    }); 
  });
  
  $('#nxt-testimonial').on('click', function(){
    var $first = $('#testimonial-list li:first');
    $first.animate({ 'margin-left': '-1106px' }, animtime, function() {
      $first.remove().css({ 'margin-left': '0px' });
      $('#testimonial-list li:last').after($first);
    });  
  });
  
});