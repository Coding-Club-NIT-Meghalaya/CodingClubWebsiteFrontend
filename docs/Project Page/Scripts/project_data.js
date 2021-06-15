function myfun(data) {
    console.log(data.project_data)
    var left_list = document.querySelector('#left-list');
    for (let i = 0; i < data.count; i++) {
        var myhtml = '';
        myhtml += '<li><a class="abc" href="#project-' + (i + 1) + '">' + data.project_data[i].Name + '</a></li>';
        left_list.innerHTML += myhtml;
    }
    var project_list = document.querySelector('#project-list');
    for (let i = 0; i < data.count; i++) {
        var html = '<section id="project-' + (i + 1) + '">' + '<div class="blog-slider"><div class="blog-slider__wrp swiper-wrapper"><div class="blog-slider__item swiper-slide"><div class="blog-slider__content">';
        html += '<p>(' + data.project_data[i].Status + ')</p>';
        html += '<div class="blog-slider__title">' + data.project_data[i].Name + '</div>';
        html += '<div class="blog-slider__code" style="color: black;font-size: 1rem;font-family:' + 'Roboto' + ',sans-serif;width: max-content;">' + data.project_data[i].Field + '</div>';
        html += '<div class="blog-slider__img mobile-visible"><img src="' + 'http://localhost:8000/api/v1/image/' + data.project_data[i].FileName + '"/></div>';
        html += '<div class="blog-slider__text text_size">' + data.project_data[i].ShortDescription + '</div>';
        html += '<a href="' + data.project_data[i].Github + '" class="blog-slider__button" style="background-color: whitesmoke; border-radius: 50px">View Project</a></div>';
        html += '<div class="blog-slider__img web-visible"><img src="' + 'http://localhost:8000/api/v1/image/' + data.project_data[i].FileName + '"/></div>';
        html += '</div>';
        html += '<div class="blog-slider__item swiper-slide"><div class="blog-slider__content"><div class="blog-slider__text text_size">' + data.project_data[i].Description + '</div></div></div>'
        html += '</div><div class="blog-slider__pagination"></div></div></section>';
        project_list.innerHTML += html;
    }
}
fetch('http://localhost:8000/api/v1/project', ).then(response => response.json()).then(data => myfun(data));