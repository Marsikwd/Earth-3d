// Title

document.addEventListener("DOMContentLoaded", function () {
    var mouseX, mouseY;
    var ww = window.innerWidth;
    var wh = window.innerHeight;
    var traX, traY;

    document.addEventListener("mousemove", function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
        traX = ((4 * mouseX) / 570) + 40;
        traY = ((4 * mouseY) / 570) + 50;
        console.log(traX);

        var titleElement = document.querySelector(".header__title");
        titleElement.style.backgroundPosition = traX + "%" + traY + "%";
    });
});


//Sky
const SKY = document.querySelector('[data-sky]');

const QUANTITY = SKY.dataset.sky ? +SKY.dataset.sky : 100;

if (SKY) {
    setStars();
    window.addEventListener('resize', setStars);

    function setStars() {
        const skySize = {
            width: SKY.offsetWidth,
            height: SKY.offsetHeight
        }

        const TOTAL_STARS = getStarsQuantity(skySize);
        let starTemplate = ``;

        for (let star = 0; star < TOTAL_STARS; star++) {
            const starPos = getStarPos(skySize);
            const starStyle = `
            position: absolute;
            top: ${starPos.top}px;
            left: ${starPos.left}px;
            `;
            const starClass = `star star--type-${Math.floor(Math.random() * 3)}`;
            starTemplate += `<div style="${starStyle}" class="${starClass}"></div>`
        }

        SKY.innerHTML = starTemplate;
    }

    function getStarsQuantity(skySize) {
        const qH = skySize.width / 100 * (QUANTITY / 2);
        const qV = skySize.height / 100 * (QUANTITY / 2);
        return qH + qV;
    }

    function getStarPos(skySize) {
        return {
            top: Math.floor(Math.random() * skySize.height),
            left: Math.floor(Math.random() * skySize.width)
        }
    }
}

//YouTube 

const player = document.querySelector("#play-video")
const videoOverlay = document.querySelector("#video-overlay")

player.addEventListener("click", function (e) {
  e.preventDefault();
  videoOverlay.classList.add("open")
  videoOverlay.innerHTML += '<iframe src="https://gatoledo.com/proj-codepen/earth.mp4" width="853" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>';
})

videoOverlay.addEventListener("click", function (e) {
  e.preventDefault();
  close_video();
});

document.addEventListener("keyup", function (e) {
  if (e.keyCode === 27) {
    close_video();
  }
});

function close_video() {
  videoOverlay.classList.remove("open")
  videoOverlay.querySelector("iframe").remove();
}


//Scroll
/* 
ScrollReveal({
    reset: true,
    distance: '50px',
    duration: 2500,
    delay: 30
});

ScrollReveal().reveal('.header__title', { delay: 10, origin: "right" });
ScrollReveal().reveal('.earth-description__title');
ScrollReveal().reveal('.earth-description__img-1', { delay: 40, origin: "right" });
ScrollReveal().reveal('.earth-description__img-2', { delay: 40, origin: "left" });
ScrollReveal().reveal('.earth-description__text, .earth-description__item', { delay: 20 });
ScrollReveal().reveal('.video-title', { delay: 15, origin: "right" });
ScrollReveal().reveal('.card', { delay: 15, origin: "left" });



 */
