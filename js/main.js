$(function () {
  $(".topBanner i").on("click", function () {
    $(".topBanner").slideUp();
  });

  $(".mainSlider").on("init afterChange", function (e, s, c) {
    var current = $(".slick-current");
    current.addClass("on").siblings().removeClass("on");
    $(".slideNum").text((c ? c + 1 : 1) + " / " + s.slideCount);
    $(".mainArrow i").removeClass("on");
    if (c == 1) {
      $(".mainArrow i").addClass("on");
    }
  });

  $(".topBanner").on("click", function () {
    $("#header").addClass("on");
  });

  $(".mainSlider").slick({
    arrows: false,
    autoplay: true,
    dots: true,
    pauseOnHover: false,
    pauseOnFocus: false,
  });

  $(".mainArrow i:nth-child(1").on("click", function () {
    $(".mainSlider)".slick("slickPrev"));
  });
  $(".mainArrow i:nth-child(2").on("click", function () {
    $(".mainSlider)".slick("slickNext"));
  });

  $("#utb").YTPlayer({
    videoURL: "https://youtu.be/dS9x5Ws67wI",
    containment: ".utb",
    autoPlay: true,
    mute: true,
    startAt: 0,
    opacity: 1,
    showControls: false,
    playOnlyIfVisible: true,
  });
  $(".utb .zoom").on("click", function (e) {
    e.preventDefault();
    $("#utb").YTPFullscreen();
  });
});
