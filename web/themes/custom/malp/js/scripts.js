/**
 * @file
 * Contains JavaScript enabling for MALP Theme.
 */

(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.behaviors.malp = {
    attach: function (context, settings) {

      $('body').once('malp').each(function () {

        // Egal height
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
