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


 getImage()

async function getImage(){
    const response = await fetch('https://codingclubnitm.herokuapp.com/api/v1/event/');
    const data = await response.json();
    
    const carousel = document.getElementById("carouselExampleCaptions");
    const url = 'https://codingclubnitm.herokuapp.com/api/v1/image/';
  
    for(let i = 1; i< data.count; i++){
        let myHtml = ' <ol class="carousel-indicators"><li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li><li data-target="#carouselExampleCaptions" data-slide-to="'+i+'"></li></ol>';
        myHtml += '<div  class="carousel-inner"><div class="carousel-item active"><img src="' + url +data.event_data[0].FileName;
        myHtml += '" class="d-block w-100 max" alt="..."></div>'
        myHtml += '<div class="carousel-item"><img src="' + url +data.event_data[i].FileName;
        myHtml += '"class="d-block w-100 max" alt="..."></div>'
        myHtml += '<a class=" carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a>'

        carousel.innerHTML += myHtml;

    }
}

