const thumbnails = document.getElementsByClassName('thumbnail')
const activeImages = document.getElementsByClassName('hovered')

for (let i = 0; i < thumbnails.length; i++) {

    thumbnails[i].addEventListener('mouseover', function() {
        console.log(activeImages)


        if (activeImages.length > 0) {
            activeImages[0].classList.remove('hovered');
        }

        this.classList.add('hovered');
        document.getElementById('featured').src = this.src;

    });
};

const leftButton = document.getElementById('arrowLeft');
const rightButton = document.getElementById('arrowRight');

leftButton.addEventListener('click', function() {
    document.getElementById('slider').scrollLeft -= 175;
});

rightButton.addEventListener('click', function() {
    document.getElementById('slider').scrollLeft += 175;
});