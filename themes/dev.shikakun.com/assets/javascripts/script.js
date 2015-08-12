$(function() {
  $('table').wrap('<div class="table"></div>');

  $('a[href^=#]').click(function() {
    var speed = 300,
        href= $(this).attr('href'),
        target = $(href == '#' || href == '' ? 'html' : href),
        position = target.offset().top;
    $('body, html').animate({scrollTop: position}, speed, 'swing');
    return false;
  });
});
