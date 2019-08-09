# moon-menu-for-muse-mist-example

1. 复制[moon-menu.styl](views/moon-menu.styl)与[moon-menu-for-muse-mist.js](scripts/moon-menu-for-muse-mist.js)到你的博客下

2. 修改`${theme_dir}/source/js/schemes/muse.js`文件，将`$(document).on('DOMContentLoaded', function() {`移至`sidebarToggleMotion.init();`前，见[muse.js](themes/next/source/js/schemes/muse.js)
