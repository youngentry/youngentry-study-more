$(function () {
    var TXT = ["HOME", "01", "02", "03", "04", "young", "copyright"];
    $(".main").fullpage({
        anchors: ["page01", "page02", "page03", "page04", "page05", "footer"],
        //navigation: true,
        css3: false,
        afterLoad: function (page, num) {
            setTimeout(() => {
                $(".section")
                    .eq(num - 1)
                    .addClass("on")
                    .siblings()
                    .removeClass("on");
            });
            $(".navBar li")
                .eq(num - 1)
                .addClass("on")
                .siblings()
                .removeClass("on");
            $(".this_page").text(TXT[num - 1]);

            !num !== 1 ? $(".Header").addClass("on") : $(".Header").removeClass("on");
        },
    });
});
