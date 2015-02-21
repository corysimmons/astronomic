$(function() {

  $('.btn-menu').click(function() {
    $('.menu').slideToggle(250);
  });

  $('a[href="#"]').click(function(e) {
    e.preventDefault();
  });

  $('.stream-sidebar a').click(function() {
    $('html').addClass('disable-scroll');
    $('.modal').addClass('active');
  });

  $('.modal .overlay').click(function() {
    $('.modal').removeClass('active');
    $('html').removeClass('disable-scroll');
  });

  $('#private-stream').click(function() {
    if($('#private-stream').prop('checked')) {
      $('.shareable-url input').val('http://astronomic.io/s/AsU2L9akL4Mx');
    } else {
      $('.shareable-url input').val('http://astronomic.io/s/tims-channel');
    }
  });

  $('.video-container').fitVids();

});
