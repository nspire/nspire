$(document).ready(() => {
  // smooth-scroll by Chris Ferdinandi for smooth scrolling to anchors:
  let scroll = new SmoothScroll('a[href*="#"]');

  // mmm hamburgers
  $('#menu-toggle').click(() => {
    $('#menu-toggle').toggleClass('is-active');
  });

  // collapse nav on anchor selection
  $('.nav-link').click(() => {
    $('#navbarNav').collapse('hide');
    $('#menu-toggle').removeClass('is-active');
  });

  // same behaviour for window resize
  $(window).resize(() => {
    $('#navbarNav').collapse('hide');
    $('#menu-toggle').removeClass('is-active');
  });

  $('#show-more-sponsors').click(() => {
    $('#show-more-sponsors-inner').toggleClass('fa-chevron-down').toggleClass('fa-chevron-up');
  });
});
