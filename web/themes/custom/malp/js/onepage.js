/**
 * @file
 * Contains JavaScript enabling scrollspy.
 */

(function ($, Drupal, drupalSettings) {

  'use strict';
    Drupal.behaviors.malp_onepage = {
      attach : function (context, settings) {
        console.log(drupalSettings);
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
        }
      }
    };
})(jQuery, Drupal, drupalSettings);
