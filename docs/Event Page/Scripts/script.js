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

// top carousel

getImage()

async function getImage() {
    const response = await fetch('https://codingclubnitm.herokuapp.com/api/v1/event/');
    const data = await response.json();

    const carousel = document.getElementById("carouselExampleCaptions");
    const url = 'https://codingclubnitm.herokuapp.com/api/v1/image/';

    for (let i = 1; i < data.count; i++) {
        let myHtml = ' <ol class="carousel-indicators"><li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li><li data-target="#carouselExampleCaptions" data-slide-to="' + i + '"></li></ol>';
        myHtml += '<div  class="carousel-inner"><div class="carousel-item active"><img src="' + url + data.event_data[0].FileName;
        myHtml += '" class="d-block w-100 max" alt="..."></div>'
        myHtml += '<div class="carousel-item"><img src="' + url + data.event_data[i].FileName;
        myHtml += '"class="d-block w-100 max" alt="..."></div>'
        myHtml += '<a class=" carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a>'
        carousel.innerHTML += myHtml;
    }
}

//programming part
programming_data()
    .catch(error => {
        console.log('error!!');
        console.error(error);
    });

async function programming_data() {
    const response = await fetch('https://codingclubnitm.herokuapp.com/api/v1/programming/');
    const data = await response.json();
    const row = document.getElementById('culture_row');
    const url = 'https://codingclubnitm.herokuapp.com/api/v1/image/';
    // let myHtml = data.programming_data[1].Title ;

    for (let i = 0; i < data.count; i++) {
        let myHtml = '<div><div class="card overflow-hidden flex-wrap"><img src = "' + url + data.programming_data[i].FileName + '" class="card-img-top">';

        myHtml += '<div class="card-body" style="margin-top:0px;"><h4 class="title">' + data.programming_data[i].Title + '<h4>';
        myHtml += '<div class="d-flex flex-column"><span class="date">Start Date:' + data.programming_data[i].StartDate.substring(0, 10);
        myHtml += '</span><span class="date">End Date:' + data.programming_data[i].EndDate.substring(0, 10);
        myHtml += '</span><span class="date">Time:' + data.programming_data[i].Time + '</span></div>';
        myHtml += '<p class="card-text">' + data.programming_data[i].ShortDescription.substring(0, 60) + '...</p>';
        myHtml += '<a href="' + data.programming_data[i].RegistrationLink + '"><button type="button" class="button">Get Details</button></a></div>';

        row.innerHTML += myHtml;
    }
}

// webinar part

webinarData()
    .catch(error => {
        console.log('error!!');
        console.error(error);
    });

async function webinarData() {
    const response = await fetch('https://codingclubnitm.herokuapp.com/api/v1/webinar/');
    const data = await response.json();
    const row = document.getElementById('culture_row1');
    const url = 'https://codingclubnitm.herokuapp.com/api/v1/image/';
    // let myHtml = data.webinar_data[1].Title ;

    for (let i = 0; i < data.count; i++) {
        let myHtml = '<div class="col-md-4"><div class="card"><img src = "' + url + data.webinar_data[i].FileName + '" class="card-img-top">';

        myHtml += '<div class="card-body" style="margin-top:0px;"><h4 class="title">' + data.webinar_data[i].Title + '<h4>';
        myHtml += '<div class="d-flex flex-column"><span class="date">Start Date:' + data.webinar_data[i].StartDate.substring(0, 10);
        myHtml += '</span><span class="date">End Date:' + data.webinar_data[i].EndDate.substring(0, 10);
        myHtml += '</span><span class="date">Time:' + data.webinar_data[i].Time + '</span></div>';
        myHtml += '<p class="card-text">' + data.webinar_data[i].ShortDescription.substring(0, 60) + '...</p>';
        myHtml += '<a href="' + data.webinar_data[i].RegistrationLink + '"><button type="button" class="button">Get Details</button></a></div>';

        row.innerHTML += myHtml;
    }
}

//Achievement Part
achievement_data()
    .catch(error => {
        console.log('error!!');
        console.error(error);
    });


async function achievement_data() {
    const response = await fetch('https://codingclubnitm.herokuapp.com/api/v1/achievement/');
    const data = await response.json();
    const row = document.getElementById('achievement_row');
    const url = 'https://codingclubnitm.herokuapp.com/api/v1/image/';
    // let myHtml = data.programming_data[1].Title ;

    for (let i = 0; i < data.count; i++) {
        var date = new Date(data.achievement_data[i].Date);
        date = date.toDateString();
        var myhtml = '<div class="cardbox"><div class=" d-flex flex-column">' +
            '<div className="user_name align-self-end">' +
            '<div class="a-card">' +
            '<img class="card-img-top imgStyle" src="https://codingclubnitm.herokuapp.com/api/v1/image/' + data.achievement_data[i].FileName + '" alt="card image cap">' +
            '<div class="card-body">' +
            '<h3 class="card-title">' +
            data.achievement_data[i].Name +
            '</h3>' +
            '<span class="date">' +
            date +
            '</span>' +
            '<p class="card-text">' +
            data.achievement_data[i].Description +
            '</p>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
        row.innerHTML += myhtml;
    }
}