var acc = document.getElementsByClassName("accordion");
var sacc = document.getElementsByClassName("sub-accordion");

var i, j;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
for (j = 0; j < sacc.length; j++) {
    sacc[j].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

/*
const spans = document.querySelectorAll('.word span');
spans.forEach((span, idx) => {
	span.addEventListener('click', (e) => {
		e.target.classList.add('active');
	});
	span.addEventListener('animationend', (e) => {
		e.target.classList.remove('active');
	});

	// Initial animation
	setTimeout(() => {
		span.classList.add('active');
	}, 750 * (idx+1))
});
*/



///////////////////////////////////////////////////////////
//API fetch for materials, blogs, videos; ship51


// function showMaterials(data) {
// 	var row = document.querySelector('#material');
// 	for (let i = 0; i < data.count; i++) {
// 		var myhtml = '';
// 		myhtml += '';
// 		row.innerHTML += myhtml;
// 	}
// }
// fetch('https://codingclubnitm.herokuapp.com/api/v1/material')
// 	.then(response => response.json())
// 	.then(data => showMaterials(data)); 

const apiUrlMaterial = 'https://codingclubnitm.herokuapp.com/api/v1/material/';
async function getMaterials() {
    const response = await fetch(apiUrlMaterial);
    const data = await response.json();
    showMaterials(data);
}
//getMaterials();




//API: Requesting list of blogs
const apiUrlBlog = 'https://codingclubnitm.herokuapp.com/api/v1/blog/';
async function getBlogs() {
    const response = await fetch(apiUrlBlog);
    const data = await response.json();
    showBlogs(data);
}

function showBlogs(data) {

    var row = document.querySelector('#bloglist');
    for (let i = 0; i < data.count; i++) {
        var date = new Date(data.blog_data[i].CreatedDate);
        date = date.toDateString();
        var myhtml = '<a href="https://codingclubnitm.herokuapp.com/blog/' + data.blog_data[i]._id + ' "target="_blank">';
        myhtml += '<div class="d-flex flex-row flex-nowrap"> <div className="user_name align-self-end"> <div class="card1"> <img class="card-img-top imgStyle" src="https://codingclubnitm.herokuapp.com/api/v1/image/' + data.blog_data[i].FileName + '"alt="Card image cap" />';
        myhtml += '<div class="card-body"> <h3 class="card-title" style="font-size: 25px;font-weight:1000;">' +
            data.blog_data[i].Title + '</h3>';
        myhtml += '<p class="card-text">' + data.blog_data[i].ShortDescription.substring(0, 100) + '</p>';
        myhtml += '<p class="card-text"><small class="text-muted">' + date + '</small> </p>';
        myhtml += '</div></div ></div ></div ></a >';
        row.innerHTML += myhtml;
    }
}
getBlogs();





//API: Requesting list of videos 
const apiUrlVideo = 'https://codingclubnitm.herokuapp.com/api/v1/video/';
async function getVideos() {
    const response = await fetch(apiUrlVideo);
    const data = await response.json();
    showVideos(data);
}

function showVideos(data) {
    var row = document.querySelector('#videolist');
    for (let i = 0; i < data.count; i++) {
        var myhtml = '<iframe class="iframe_video" src="' + data.video_data[i].Link + '"></iframe>';
        row.innerHTML += myhtml;
    }
}
getVideos();