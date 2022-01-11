/* ==========================================
タブ
========================================== */

// タブ
$(function () {
    $(".tab_contents").hide();
    $(".tab_contents:first-child").show();
    $("header ul li:first-child a").addClass("selected");
    $("header ul li a").on("click", function () {
        $(".tab_contents").hide();
        $("header ul li a").removeClass("selected");
        $(this).addClass("selected");
        var target = $(this).attr("href");
        $(target).fadeIn();
        return false;
    });
});
// /タブ

/* ==========================================
タブ
========================================== */
