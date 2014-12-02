$(function() {

  var resizeChatHeight = function() {
    $('.stream-chat').height($('.streamer').height());
  };

  setTimeout(resizeChatHeight, 500);

  var didResize = false;
  $(window).resize(function() {
    didResize = true;
  });
  setInterval(function() {
    if(didResize) {
      resizeChatHeight();
      didResize = false;
    }
  }, 250);

});
