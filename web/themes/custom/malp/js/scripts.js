/**
 * @file
 * Contains JavaScript enabling fullpage.
 */

(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.behaviors.mba_fullpage = {
    attach: function (context, settings) {

      $('body').once('malp').each(function () {
        console.log('coucou');
      });
  }
};

})(jQuery, Drupal, drupalSettings);
