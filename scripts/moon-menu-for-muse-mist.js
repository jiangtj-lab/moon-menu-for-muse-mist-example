/* global hexo */

'use strict';

// Hide sidebar button, and add bar button in moon-menu
hexo.extend.filter.register('theme_inject', function (injects) {

  if (hexo.theme.config.scheme === 'Mist' || hexo.theme.config.scheme === 'Muse') {

    injects.style.push('views/moon-menu.styl');

    hexo.config.moon_menu = {
      sidebar: {
        enable: true,
        icon: 'fa fa-bars',
        func: 'sidebarToggleMotion.clickHandler',
        order: -3
      }
    }

  }

}, 9);
