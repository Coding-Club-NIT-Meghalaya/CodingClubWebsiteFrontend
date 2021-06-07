var scene = document.getElementById('scene');
var parallax = new Parallax(scene);
var tl = gsap.timeline();
tl.from("body", {
        opacity: 0,
        duration: 1,
        ease: "easein"
    })
    .from(".cubes img", {
        stagger: 0.1,
        opacity: 0,
        y: -170,
        duration: 1,
        ease: "back"
    });
const tilt = $('.box').tilt({
    scale: 1.0
});

function myfun(data) {
    var row = document.querySelector('#teammember');
    for (let i = 0; i < data.count; i++) {
        var myhtml = '<div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center"><div class = "box"><div class = "profile-img" > <img src = "';
        myhtml += 'https://codingclubnitm.herokuapp.com/api/v1/image/' + data.team_data[i].filename;
        myhtml += '" alt="" srcset=""></div>';
        myhtml += "<h2>" + data.team_data[i].FirstName + " " + data.team_data[i].LastName + "</h2>";
        myhtml += "<p>" + data.team_data[i].DesignationName + "</p>";
        myhtml += '<p class="Socials"><a href="' + data.team_data[i].LinkedIn + '"><i class="fa fa-linkedin"></i></a><a href="' + data.team_data[i].Github + '"><i class="fa fa-github"></i></a><a href="' + data.team_data[i].Facebook + '"><i class="fa fa-facebook"></i></a></p>';
        myhtml += '</div></div>';
        row.innerHTML += myhtml;
    }
}
fetch('https://codingclubnitm.herokuapp.com/api/v1/teammember', )
    .then(response => response.json())
    .then(data => myfun(data));