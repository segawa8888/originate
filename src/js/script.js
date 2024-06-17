jQuery(function ($) {
    // ハンバーガーメニュー
    $(function () {
        $(".js-hamburger").click(function () {
            $(this).toggleClass("is-open");
            if ($(this).hasClass("is-open")) {
                openDrawer();
            } else {
                closeDrawer();
            }
        });

        // backgroundまたはページ内リンクをクリックで閉じる
        $(".js-drawer a[href]").on("click", function () {
            closeDrawer();
        });

        // resizeイベント
        $(window).on('resize', function() {
            if (window.matchMedia("(min-width: 768px)").matches) {
                closeDrawer();
            }
        });
    });

    function openDrawer() {
        $(".js-drawer").addClass("is-open");
        $(".js-hamburger").addClass("is-open");
    }

    function closeDrawer() {
        $(".js-drawer").removeClass("is-open");
        $(".js-hamburger").removeClass("is-open");
    }
});

jQuery(function ($) {
    const mv_swiper = new Swiper(".js-mv-swiper", {
        loop: true,
        speed: 1000,
        slidesPerView:1.2,
        spaceBetween:34,
        breakpoints: {
            768: {
                centeredSlides:true,
                slidesPerView:1.35,
                spaceBetween:25,
            }
          },
        autoplay: {
            delay: 1000,
        },
    });
});

jQuery(function ($) {
    $(".js-modal-open").each(function () {
        $(this).on("click", function (e) {
            e.preventDefault();
            var target = $(this).data("target");
            var modal  = document.getElementById(target);
            $(modal).fadeIn();
            $("html,body").css("overflow", "hidden");
        });
    });
    $(".js-modal-close,.js-modal").on("click", function () {
        $(".js-modal").fadeOut();
        $("html,body").css("overflow", "initial");
    });
});

jQuery(function ($) {
    $('.js-faq-question').on('click', function () {
        $(this).next().slideToggle();
        $(this).toggleClass('is-open');
    });
});

jQuery(function ($) {
    $('.js-page-top').on("click",function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    // 初期値を指定
gsap.set('.js-fade', {
    opacity: 0,
    y: 50,
  });
  
  // batchを使って各要素をアニメーションさせます
  ScrollTrigger.batch('.js-fade', {
    onEnter: batch => gsap.to(batch, {
      opacity: 1, 
      y: 0, 
      stagger: 0.1,// 時差の間隔
      overwrite: true,
    }),
    start: 'top 85%',
  });
});