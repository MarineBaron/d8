/**
 * @file
 * Contains JavaScript enabling scrollspy.
 */

(function ($, Drupal) {

  'use strict';
    Drupal.behaviors.malp_article = {
      attach : function (context, settings) {

        $('body').once('malp_article').each(function () {

          // Egal height
          $('.block-bottom > div').matchHeight({
            byRow: true,
            property: 'height',
            target: null,
            remove: false
          });
        });
      }
    };
})(jQuery, Drupal);
