var slideIndex = 0;
var slides = document.getElementsByClassName("mySlides");

var showSlides = () => {
    var i;
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000);
}

if (slides.length > 0) {
    showSlides();
}
var Menu = document.querySelectorAll('p');
var MenuUl = document.querySelectorAll('ul');


let z = 0;
let y = 0;

$(document).ready(() => {
    $('#Fsc').click(() => {
        $('.Fsc').slideToggle(200);
        // console.log(fsck);
        menu(Menu[0], 2);

    });
    $('#Btc').click(() => {
        $('.Btc').slideToggle(200);
        menu(Menu[1], 3);
    });

    $('#Ust').click(() => {
        $('.Ust').slideToggle(200);
        menu(Menu[2], 4);

    });
    $('#Rsc').click(() => {
        $('.Rsc').slideToggle(200);
        menu(Menu[3], 5);

    });
    $('.explore').click(() => {
        if (z == 0) {
            $('.exp-ico').css('transform', 'rotate(90deg)');
            z = 1;
        } else {
            $('.exp-ico').css('transform', 'rotate(0deg)');
            z = 0;

        }
        $('.Rounded_Rectangle_3').slideToggle(200);

    });

});

const menu = (plusMinus, menuNo) => {

    for (var i = 2; i <= 5; i++) {
        if (i != menuNo) {
            // console.log(i)
            MenuUl[i].style.display = "none";
        }
        for (let j = 0; j <= 3; j++) {
            if (Menu[j] != plusMinus) {
                Menu[j].style.setProperty('--rotate', 'rotate(90deg)');
            } else {
                Menu[j].style.setProperty('--rotate', 'rotate(0deg)');

            }
        }
    }
}