var slideshows = document.querySelectorAll('[data-component="slideshow"]');
// var dot = document.querySelectorAll('.dots');
var dots = document.querySelectorAll('.dots');



// Apply to all slideshows that you define with the markup wrote
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

    var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); // Get an array of slides

    var index = 0,
        time = 2000;
    slides[index].classList.add('active');

    setInterval(() => {


        // if (index == 0) {
        //     // dots[0].style.backgroundColor = "#bbb";
        //     dots[2].style.backgroundColor = "#bbb";
        //     dots[1].style.backgroundColor = "#bbb";

        // }
        // if (index == 1) {
        //     // dots[1].style.backgroundColor = "yellow";
        //     dots[0].style.backgroundColor = "#bbb";
        //     dots[2].style.backgroundColor = "#bbb";
        // }
        // if (index == 2) {
        //     // dots[2].style.backgroundColor = "yellow";
        //     dots[0].style.backgroundColor = "#bbb";
        //     dots[1].style.backgroundColor = "#bbb";
        // }

        slides[index].classList.remove('active');
        //Go over each slide incrementing the index
        // console.log(index)
        index++;


        // If you go over all slides, restart the index to show the first slide and start again
        if (index === slides.length) index = 0;

        slides[index].classList.add('active');

        // alert(i)
    }, time);
}

function dott() {
    var indexx = 0,
        timez = 2000;
    setInterval(() => {

        console.log(indexx)
        dots[indexx].style.backgroundColor = "yellow";
        if (indexx != 0) {
            dots[indexx - 1].style.backgroundColor = "#bbb";
        } else {
            dots[indexx - 0].style.backgroundColor = "#bbb";

        }
        indexx++;
        if (indexx === dots.length) indexx = 0;
    }, timez);


}