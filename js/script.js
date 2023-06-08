$(function() {
    // fullpage scroll

    window.addEventListener("wheel", function (event) {
        event.preventDefault();
    }, { passive: false });

    var $html = $("html").animate({ scrollTop: 0 });
    var $window = $(window);
    
    $window.on("wheel", function (event) {
        if ($html.is(":animated")) return;
        
        var delta = event.originalEvent.deltaY;
        var currentScrollTop = $window.scrollTop();
        var pageHeight = $window.height();
        var scrollDist = 0;
        
        if (delta > 0) {
            var over = currentScrollTop % pageHeight;
            scrollDist = currentScrollTop + pageHeight - over;
        } else {
            var over = currentScrollTop % pageHeight;
            
            if (over == 0) scrollDist = currentScrollTop - pageHeight;
            else scrollDist = currentScrollTop - over
        }
        
        $html.animate({ scrollTop: scrollDist });
    });
    
    // menu click scroll

    var $menu = $('#menu > ul > li > a');

    $menu.on("click", function(event) {
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    }); 

    // photo gallery animation

    var $imageList = $("#photo_gallery_photo");
    var delay = 3000;
    var duration = 600;
    var timerId = 0;
    var $contentBox = $("#photo_gallery_content_box")

    function nextImageSlide() {
        if($imageList.is(":animated")) return;

        $imageList.animate({left:"-320px"}, duration, function() {

            $(this).removeAttr("style")
                    .children(":first").appendTo(this);
        });
    }

    function prevImageSlide() {
        if($imageList.is(":animated")) return;

        $imageList.prepend($imageList.children(":last"))
                  .css({left:"-320px"})
                  .animate({left:0}, duration);
    }

    timerId = window.setInterval(nextImageSlide, delay);

    $contentBox.hover(
        function() { 
            window.clearInterval(timerId);
        },
        function() { 
            timerId = window.setInterval(nextImageSlide, delay);
        }
    );

    $("#photo_gallery_after > a").on("click", function(event) {
        event.preventDefault();
        nextImageSlide();
    });

    $("#photo_gallery_before > a").on("click", function(event) {
        event.preventDefault();
        prevImageSlide();
    });

    // modal

    var $click = $('#portfolio_design_circle1_text > a > span');
    var $popup = $('#design_modal');
    var $close = $('#design_modal_close > a');
    var $modalMenu1 = $('#modal_menu1');
    var $modalMenu2 = $('#modal_menu2');
    var $modalMenu3 = $('#modal_menu3');
    var $modalMenu4 = $('#modal_menu4');
    var $modalContent1 = $('#design_modal_content1');
    var $modalContent2 = $('#design_modal_content2');
    var $modalContent3 = $('#design_modal_content3');
    var $modalContent4 = $('#design_modal_content4');

    $click.on("click", function(event) {
        event.preventDefault();
        $popup.addClass("on");
    });
    $close.on("click", function(event) {
        event.preventDefault();
        $popup.removeClass("on");
    });

    $modalMenu1.on("click", function(event) {
        event.preventDefault();
        $modalContent1.removeClass("hidden");
        $modalContent1.siblings().addClass("hidden");
    });
    $modalMenu2.on("click", function(event) {
        event.preventDefault();
        $modalContent2.removeClass("hidden");
        $modalContent2.siblings().addClass("hidden");
    });
    $modalMenu3.on("click", function(event) {
        event.preventDefault();
        $modalContent3.removeClass("hidden");
        $modalContent3.siblings().addClass("hidden");
    });
    $modalMenu4.on("click", function(event) {
        event.preventDefault();
        $modalContent4.removeClass("hidden");
        $modalContent4.siblings().addClass("hidden");
    });



});