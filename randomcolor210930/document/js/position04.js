$(function () {
  $(".num li").on("click", function () {
    var idx = $(this).index();
    $('.shoes .case ul').css({ top:-450 *idx})
  })
});
