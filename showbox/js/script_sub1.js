$(function() {
    // menu

    var $menu = $('#menu_bar > ul > li');
    var $subMenu = $('.submenu');
    var $subBg = $('#submenu_background');

    $menu.on('mouseover', function () {
        $subMenu.stop().slideDown(200);
        $subBg.stop().slideDown(200);
    });
    $menu.on('mouseout', function () {
        if (!$(this).hasClass('menu')) {
            $subMenu.stop().slideUp(200);
            $subBg.stop().slideUp(200);
        }
    });
});