$(document).ready(function() {
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
        trig = $('.ham'),

        isClosed = false;

    trigger.click(function() {
        hamburger_cross();
    });
    trig.click(function() {
        hamburger_cross();
    })

    function hamburger_cross() {

        if (isClosed == true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }

    $('[data-toggle="offcanvas"]').click(function() {
        $('#wrapper').toggleClass('toggled');
    });
});


const buttonRight1 = document.getElementById('slideRight');
const buttonLeft1 = document.getElementById('slideLeft');


buttonRight1.onclick = function() {
    document.getElementById('culture_row').scrollLeft += 338;
    behavior: 'smooth';
};

buttonLeft1.onclick = function() {
    document.getElementById('culture_row').scrollLeft -= 338;
    behavior: 'smooth';
};
//////// Popular scroll ////////////
(function($) {
    $(".left-arrow").hide();
    $("#startrow2").on('scroll', function() {
        $val = $(this).scrollLeft();

        if ($(this).scrollLeft() + $(this).innerWidth() >= $(this)[0].scrollWidth) {
            $(".right-arrow").hide();
        } else {
            $(".right-arrow").show();
        }

        if ($val == 0) {
            $(".left-arrow").hide();
        } else {
            $(".left-arrow").show();
        }
    });
    console.log('init-scroll: ' + $(".right-arrow").scrollLeft());
    $(".right-arrow").on("click", function() {
        $("#startrow2").animate({
            scrollLeft: '+=460'
        }, 200);

    });
    $(".left-arrow").on("click", function() {
        $("#startrow2").animate({
            scrollLeft: '-=460'
        }, 200);
    });
})(jQuery);