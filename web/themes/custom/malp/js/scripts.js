/**
 * @file
 * Contains JavaScript enabling for MALP Theme.
 */

(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.behaviors.malp = {
    attach: function (context, settings) {

      $('body').once('malp').each(function () {
        // Button next.
        $('.btn-next-main').on('click', function () {
          var $elt = $('#main-content').eq(0);
          $('html, body').animate({
            scrollTop: $elt.offset().top - 100
          }, 800);
        });

        // Egal height
        $('.subfooter > .row > div').matchHeight({
          byRow: true,
          property: 'height',
          target: null,
          remove: false
        });

        $('.subfooter .view-content').matchHeight({
          byRow: true,
          property: 'height',
          target: null,
          remove: false
        });
      });
  }
};

})(jQuery, Drupal, drupalSettings);
