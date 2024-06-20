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