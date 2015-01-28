$(document).ready(function () {

    var toggler = '.navbar-toggle';
    var pagewrapper = '#page-content';
    var navigationwrapper = '.navbar-header';
    var slidewidth = '80%';
    var menuneg = '-100%';
    var slideneg = '-80%';

    $("#slide-nav").on("click", toggler, function () {
      var selected = $(this).hasClass('slide-active');
      var $slideMenu = $('#slidemenu');
      $slideMenu.stop().animate({
        right: selected ? menuneg : '0px'
      });
      $('#navbar-height-col').stop().animate({
        right: selected ? slideneg : '0px'
      });
      $(pagewrapper).stop().animate({
        right: selected ? '0px' : slidewidth
      });
      $(navigationwrapper).stop().animate({
        right: selected ? '0px' : slidewidth
      });
      $(this).toggleClass('slide-active', !selected);
      $slideMenu.toggleClass('slide-active');
      $('#page-content, .navbar, body, .navbar-header').toggleClass('slide-active');
    });

    $('.close-menu').on('click', function() {
      $('#slidemenu').stop().animate({
        right: selected ? menuneg : '-80px'
      });
      $('#navbar-height-col').stop().animate({
        right: selected ? slideneg : '-80px'
      });
      $(pagewrapper).stop().animate({
        right: selected ? '-80px' : slidewidth
      });
      $(navigationwrapper).stop().animate({
        right: selected ? '-80px' : slidewidth
      });
      $('#page-content, .navbar, body, .navbar-header, #slidemenu').toggleClass('slide-active');
    });

    var selected = '#slidemenu, #page-content, body, .navbar, .navbar-header';

    $(window).on("resize", function () {
      if ($(window).width() > 767 && $('.navbar-toggle').is(':hidden')) {
        $(selected).removeClass('slide-active');
      }
    });

});
