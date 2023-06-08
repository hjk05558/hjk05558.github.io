$(function () {

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


    // banner

    var $container = $("#container");
            var $imageList = $("#image-list");
            var delay = 3000;
            var duration = 600;
            var timerId = 0;
            var photoIndex = 0;

            var $bullets = $("#bullets");

            var $bulletList = $bullets.find("a");

            $bulletList.eq(photoIndex).addClass("on");

            function nextImageSlide() {
                photoIndex++;
                photoIndex %= $bulletList.length;

                $bulletList.removeClass("on")
                           .eq(photoIndex).addClass("on");
                $imageList.animate({left:"-100%"}, duration, function() { 
                    $imageList.removeAttr("style")
                                .children(":first").appendTo($imageList);
                });
            }

            timerId = window.setInterval(nextImageSlide, delay);
           
            $container.hover(
                function() {
                    window.clearInterval(timerId);
                },
                function() {
                    timerId = window.setInterval(nextImageSlide, delay);
                }
            );
            $bulletList.on("click", function(event) { 
                event.preventDefault();

                var clickedIndex = $bulletList.index(this);

                var step = clickedIndex - photoIndex;
                if(!step) return;

                photoIndex = clickedIndex;

                $bulletList.removeClass("on")
                           .eq(photoIndex).addClass("on");
                if(step > 0) {
                    $imageList.animate({left:step*-100 + "%"}, duration, function() { 
                        $imageList.removeAttr("style")
                                .children(":lt("+step+")")
                                .appendTo($imageList);    
                    });
                }else {
                    $imageList
                        .prepend( $imageList.children(":gt("+(step-1)+")") )
                        .css({left:step*100 + "%"})
                        .animate({left:0} ,duration);
                }
            });
});