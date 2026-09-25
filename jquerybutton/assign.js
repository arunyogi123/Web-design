$("body").on("click", ".all", function () {
    $(".img").show();
});

$("body").on("click", ".img paper", function () {
    $(".img").remove();
    $(".img paper").show();
});

$("body").on("click", ".img magazine", function () {
    $(".img").remove();
    $(".img magazine").show();
});

$("body").on("click", ".img logo", function () {
    $(".img").remove();
    $(".img logo").show();
});