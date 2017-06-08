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

      });
  }
};

})(jQuery, Drupal, drupalSettings);
