let text = document.getElementById("slider__text");
let slider__img1 = document.getElementById("slider__img1");
let slider__img3 = document.getElementById("slider__img3");
let slider__img4 = document.getElementById("slider__img4");
let slider__img5 = document.getElementById("slider__img5");
let slider__img6 = document.getElementById("slider__img6");
let slider__img8 = document.getElementById("slider__img8");


window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.transform = `translateY(${value * 1.0}px)`;
    slider__img8.style.transform = `translateY(${-value}px)`;
    slider__img5.style.transform = `translateY(${0.5*value}px)`;
    slider__img4.style.transform = `translateY(${0.3*value}px)`;
    slider__img3.style.transform = `translateY(${0.2*value}px)`;
    slider__img3.style.transform = `translateY(${0.1*value}px)`;

});
document.addEventListener('scroll', function() {
  const slider = document.querySelector('.slider');
  const images = document.querySelectorAll('.slider img');
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  // Calculate opacity for the slider
  const maxOpacity = 1;
  const minOpacity = 0;
  const fadeStart = 0;
  const fadeEnd = windowHeight;
  let opacity = maxOpacity - (scrollPosition - fadeStart) / (fadeEnd - fadeStart);
  opacity = Math.max(minOpacity, Math.min(maxOpacity, opacity)); // Clamp opacity between min and max

  // Calculate background color for the slider
  const maxBlackOpacity = 1; // Maximum opacity for the black background
  let blackOpacity = (scrollPosition - fadeStart) / (fadeEnd - fadeStart) * maxBlackOpacity;
  blackOpacity = Math.max(0, Math.min(maxBlackOpacity, blackOpacity)); // Clamp between 0 and maxBlackOpacity
  const backgroundColor = `rgba(0, 0, 0, ${blackOpacity})`; // Background color from black to transparent

  // Apply styles to slider
  slider.style.opacity = opacity;
  slider.style.backgroundColor = backgroundColor;

  // Adjust opacity for images in the slider
  images.forEach(img => {
      const imageTop = img.getBoundingClientRect().top + window.scrollY;
      const imageBottom = imageTop + img.offsetHeight;
      const isVisible = (imageTop < windowHeight && imageBottom >= 0);
      
      if (isVisible) {
          let imageOpacity = 1 - (scrollPosition - imageTop) / (windowHeight + img.offsetHeight);
          imageOpacity = Math.max(0, Math.min(1, imageOpacity)); // Clamp opacity between 0 and 1
          img.style.opacity = imageOpacity;
      } else {
          img.style.opacity = 0; // Hide image if it's not visible
      }
  });
});



// Using IntersectionObserver to hide images when the content section is reached
let slider = document.querySelector('.slider');
let content = document.getElementById('content');
let options = {
    root: null,
    rootMargin: "0px",
    threshold: 0
};

let hideImagesCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.slider img').forEach(img => {
                img.style.opacity = 1;
            });
        } else {
            document.querySelectorAll('.slider img').forEach(img => {
                img.style.opacity = 0;
            });
        }
    });
};

let observer = new IntersectionObserver(hideImagesCallback, options);
observer.observe(slider);

let contentObserver = new IntersectionObserver(hideImagesCallback, options);
contentObserver.observe(content);

//content
document.addEventListener("scroll", function() {
    const scrolled = window.pageYOffset;
    const backgroundLeft = document.querySelector(".content__img--honghactrai");
    const backgroundRight = document.querySelector(".content__img--honghacphai");
    const backgroundLeft2 = document.querySelector(".content__img--honghactrai2");
    const translateXLeft = -200 + scrolled * 0.3; // Start off-screen and move into view from the left
    const translateXRight = 500 - scrolled * 0.3; // Start off-screen and move into view from the right
    const translateXLeft2 = -800 + scrolled * 0.3; // Start off-screen and move into view from the right

    const rotateZ = 0; 

    backgroundLeft.style.transform = `translate3d(${translateXLeft}%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${rotateZ}deg) skew(0deg, 0deg)`;
    backgroundRight.style.transform = `translate3d(${translateXRight}%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${rotateZ}deg) skew(0deg, 0deg)`;
    backgroundLeft2.style.transform = `translate3d(${translateXLeft2}%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${rotateZ}deg) skew(0deg, 0deg)`;
});

// document.addEventListener('scroll', function() {
//     const drawLine = document.querySelector('.draw-line');
//     const pins = document.querySelectorAll('.pin');
//     const content = document.getElementById('content');
//     const contentRect = content.getBoundingClientRect();
//     const windowHeight = window.innerHeight;
//     const maxLineHeight = 440; 
    
//     if (contentRect.top < windowHeight && contentRect.bottom > 0) {
//         // Calculate the new height for draw-line based on scroll position
//         const scrollPosition = windowHeight - contentRect.top;
//         const newHeight = Math.min(scrollPosition, maxLineHeight);
//         drawLine.style.height = `${newHeight+700}px`;

//         // Update pin visibility based on draw-line height
//         pins.forEach(pin => {
//             if (pin.offsetTop < newHeight) {
//                 pin.style.opacity = 1;
//             } else {
//                 pin.style.opacity = 0;
//             }
//         });
//     }
// });

(function($) {
  $.fn.timeline = function() {
    var selectors = {
      id: $(this),
      item: $(this).find(".timeline-item"),
      activeClass: "timeline-item--active",
      img: ".timeline__img"
    };
    selectors.item.eq(0).addClass(selectors.activeClass);
    selectors.id.css("background-color", "#EEE4DA"); // Set initial background color

    var itemLength = selectors.item.length;
    $(window).scroll(function() {
      var max, min;
      var pos = $(this).scrollTop();
      selectors.item.each(function(i) {
        min = $(this).offset().top;
        max = $(this).height() + $(this).offset().top;
        var that = $(this);
        if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
          selectors.item.removeClass(selectors.activeClass);
          selectors.item.last().addClass(selectors.activeClass);
        } else if (pos <= max - 40 && pos >= min) {
          selectors.item.removeClass(selectors.activeClass);
          $(this).addClass(selectors.activeClass);
        }
      });
    });
  };
})(jQuery);

$("#timeline-1").timeline();

document.addEventListener("DOMContentLoaded", function () {
  const musicParent = document.querySelector(".music-parent");
  const musicPlayer = document.querySelector(".music-player");

  musicParent.addEventListener("click", function () {
      if (musicPlayer.style.display === "none" || !musicPlayer.style.display) {
          musicPlayer.style.display = "block";
      } else {
          musicPlayer.style.display = "none";
      }
  });
});