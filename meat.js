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
var Fsc = document.getElementById('Fsc');
var Btc = document.getElementById('Btc');
var Ust = document.getElementById('Ust');
var Rsc = document.getElementById('Rsc');
let z = 0;
// var elem = window.getComputedStyle(Fsc, ':after'); //get css styles

Fsc.addEventListener('click', () => {
    if (z == 0) {
        Fsc.style.setProperty('--rotate', 'rotate(0deg)');
        z = 1;
    } else {
        Fsc.style.setProperty('--rotate', 'rotate(90deg)');
        z = 0;
    }

})
Btc.addEventListener('click', () => {
    if (z == 0) {
        Btc.style.setProperty('--rotate', 'rotate(0deg)');
        z = 1;
    } else {
        Btc.style.setProperty('--rotate', 'rotate(90deg)');
        z = 0;
    }

})
Ust.addEventListener('click', () => {
    if (z == 0) {
        Ust.style.setProperty('--rotate', 'rotate(0deg)');
        z = 1;
    } else {
        Ust.style.setProperty('--rotate', 'rotate(90deg)');
        z = 0;
    }

})
Rsc.addEventListener('click', () => {
        if (z == 0) {
            Rsc.style.setProperty('--rotate', 'rotate(0deg)');
            z = 1;
        } else {
            Rsc.style.setProperty('--rotate', 'rotate(90deg)');
            z = 0;
        }

    })
    // if (z == 1) {
    // Fsc.addEventListener('click', () => {
    //     z = 0;
    // })
    // }

//     if (FtrMenuUL0[0].style.display == "none") {
//         FtrMenuUL0[0].style.display = "block";
//     } else {
//         FtrMenuUL0[0].style.display = "none";
//     }
// FtrMenu2.addEventListener('click', () => {
//     if (FtrMenuUL1[0].style.display == "none") {
//         FtrMenuUL1[0].style.display = "block";
//     } else {
//         FtrMenuUL1[0].style.display = "none";
//     }
// })
// FtrMenu3.addEventListener('click', () => {
//     if (FtrMenuUL2[0].style.display == "none") {
//         FtrMenuUL2[0].style.display = "block";
//     } else {
//         FtrMenuUL2[0].style.display = "none";
//     }
// })
// FtrMenu4.addEventListener('click', () => {
//         if (FtrMenuUL3[0].style.display == "none") {
//             FtrMenuUL3[0].style.display = "block";
//         } else {
//             FtrMenuUL3[0].style.display = "none";
//         }
//     })
// fp[0].addEventListener('dblclick', () => {
//         // fElem[0].slideToggle();
//         fElem[0].style.display = "block";
//     })
// console.log(elem)
$(document).ready(() => {
    $('#Fsc').click(() => {
        $('.Fsc').slideToggle();
    });
    $('#Btc').click(() => {
        $('.Btc').slideToggle(200);

    });
    $('#Ust').click(() => {
        $('.Ust').slideToggle(200);

    });
    $('#Rsc').click(() => {
        $('.Rsc').slideToggle(200);

    });
});
// $("#apj").click(function() {
//     $("#klm").slideToggle("slow");
// });