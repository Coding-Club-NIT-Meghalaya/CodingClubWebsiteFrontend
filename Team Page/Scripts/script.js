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