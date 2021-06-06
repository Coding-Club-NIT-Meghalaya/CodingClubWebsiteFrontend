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