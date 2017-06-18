$(document).ready(function() {
  
  // Add smooth scrolling on # links
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });

  // Link highlighting
  $('a').hover(function(event) { 
    $(this).toggleClass('text-white', 300);
  });

  // Toggle navbar closed when links are selected on small screens
  $('.navbar a').click(function(event) {
    if ($(window).width() <= 991) {
      $('.navbar-collapse').collapse('hide');
    }
  });
  
  // Close navbar if user clicks/taps outside navbar
  $("#content").on('click', function(event) {
    $('.navbar-collapse').collapse('hide');
  });

  // Really dumb manual scrollspy implementation because Bootstrap's is being fucking useless
  function isScrolledIntoView(elem) {
      var docViewTop = $(window).scrollTop();
      var docViewBottom = docViewTop + $(window).height();

      var elemTop = $(elem).offset().top;
      var elemBottom = elemTop + $(elem).height();

      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  navHighlightClass = 'text-white';
  setInterval(function() {
    if (isScrolledIntoView('#welcome')) {
      $('#navWelcome').addClass(navHighlightClass);
      $('#navVideo').removeClass(navHighlightClass);
      $('#navThisYear').removeClass(navHighlightClass);

    }else if (isScrolledIntoView('#video')) {
      $('#navVideo').addClass(navHighlightClass);
      $('#navWelcome').removeClass(navHighlightClass);
      $('#navThisYear').removeClass(navHighlightClass);

    }else{
      $('#navThisYear').addClass(navHighlightClass);
      $('#navWelcome').removeClass(navHighlightClass);
      $('#navVideo').removeClass(navHighlightClass);
    }
  }, 300);

});