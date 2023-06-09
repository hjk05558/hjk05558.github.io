$(function() {
    // menu

    var $menu = $('.menu_ul > li');
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

    /*
    // scrollTop + $(window).height > $(this).offset().top   →   opacity : 1
    // https://nykim.work/56?category=692676
    // https://kutar37.tistory.com/entry/%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%8A%A4%ED%81%AC%EB%A1%A4%EC%8B%9C-Fade-In-%ED%9A%A8%EA%B3%BC%EC%A3%BC%EA%B8%B0
    // https://webclub.tistory.com/category/Web%20Tech/jQuery

    var $window = $(window);
    var viewportHeight = $window.height();
    var scrollTop = $window.scrollTop();
    var content = $("#photo_content > li");
    var contentHeight = $("#photo_content > li:nth-child(1)").offset().top;

    $window.on("scroll", function() {
        for (var i = 0; i < content.length; i++) {
            if ((viewportHeight + scrollTop) > contentHeight) {
                contentHeight.css({opacity:"1"});
                contentHeight = $(this).next.siblings();
            }
        }
    });
    */

    $window = $(window);
    $contentItems = $('.fadein');
    
    $window.scroll( function(){
        $contentItems.each( function(i){
            
            var itemHeight = $(this).offset().top + $(this).outerHeight();
            var viewportHeight = $window.scrollTop() + $window.height();
            
            if( viewportHeight > itemHeight && $(this)){
                $(this).animate({'opacity':'1'},1000);
            }
        }); 
    });
    

});