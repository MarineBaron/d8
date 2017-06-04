/**
 * @file
 * Contains JavaScript enabling for MALP Theme.
 */

(function ($, Drupal, drupalSettings) {

  'use strict';

  Drupal.behaviors.malp = {
    attach: function (context, settings) {

      $('body').once('malp').each(function () {

        //Drupal.behaviors.malp_scrollspy(".region-navigation-collapsible");

      });
  }
};

})(jQuery, Drupal, drupalSettings);
