$(function () {
  $(".box ul").on("click", function () {
    $(".box li").toggleClass("on");
  });
});

// $(function () {
//     $(".box ul").on("click", function () {
//       console.log("face_clicked");
//       if ($(".box li").attr("class") == undefined) {
//         console.log("1");
//         $(".box li").addClass("on");
//       } else if ($(".box li").attr("class") == "on") {
//         $(".box li").removeClass("on");
//         console.log("2");
//       }
//     });
//   });
