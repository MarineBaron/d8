/**
 * @file
 * Contains JavaScript enabling scrollspy.
 */

(function ($, Drupal, drupalSettings) {

  'use strict';
    Drupal.behaviors.malp_affix = {
      attach : function (context, settings) {

        $('body').once('malp_affix').each(function () {

            // Ajout de la fonctionnalité affix
            $('#navbar').affix({offset: {top: 300} });

            // Décallage de l'image pour passer sous le menu
            var windowHeight = $(window).height();
            var $adminHeight = 0;
            var $marginTop = $('#navbar').height() + 15;
            if ($('#toolbar-administration').length) {
              if ($('body.toolbar-tray-open.toolbar-horizontal').length) {
                $adminHeight += $('nav.toolbar-lining').height();
              }
            }
            $('#header-image').css('margin-top','-' + ($adminHeight + $marginTop) + 'px');

            // Button next
            $('.btn-next-main').on('click', function () {
              $('html, body').animate({
                scrollTop: $('#main-content').eq(0).offset().top - ($adminHeight + $marginTop)
              }, 800);
            });
        });
      }
    };
})(jQuery, Drupal);
