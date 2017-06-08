/**
 * @file
 * Contains JavaScript enabling scrollspy.
 */

(function ($, Drupal, drupalSettings) {

  'use strict';
    Drupal.behaviors.malp_onepage = {
      attach : function (context, settings) {

        $('body').once('malp_onepage').each(function () {
          // Scroll.
          if (drupalSettings.malp.onepage) {
            $('body').scrollspy({target: drupalSettings.malp.navbar, offset: 50});
            $(drupalSettings.malp.navbar).on('click', 'a', function (event) {
              var $hash = this.hash;
              if ($hash.length && $($hash).length) {
                event.preventDefault();
                $('html, body').animate({
                  scrollTop: $($hash).offset().top
                }, 800, function () {
                  window.location.hash = $hash;
                });
              }
            });

            // Fullscreen carousel.
            var $item = $('.carousel-inner .carousel-item');
            var $wHeight = $(window).height();

            $item.height($wHeight);
            $item.addClass('fullscreen');

            $item.each(function () {
              var $img = $(this).find('img').eq(0);
              var $src = $img.attr('src');
              $(this).css({
                'background-image' : 'url(' + $src + ')',
              });
              $img.remove();
            });

            $(window).on('resize', function () {
              $wHeight = $(window).height();
              $item.height($wHeight);
            });

            // Button next.
            $('.btn-next-block').on('click', function () {
              var $elt = $('.region-content section.block').eq(0);
              $('html, body').animate({
                scrollTop: $elt.offset().top
              }, 800);
            });
          }
        });
      }
    };
})(jQuery, Drupal, drupalSettings);
