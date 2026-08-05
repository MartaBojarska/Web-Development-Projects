// $("h1").addClass("big-title margin-50");

// $("h1").removeClass("big-title");

// $("h1").text("Bye");

// $("button").text("Don't Click Me");

// console.log($("img").attr("src"));

// $("a").attr("href", "https://www.yahoo.com");

// $("h1").click(function () {
//     $("h1").css("color", "purple")
// });

// $("button").click(function () {
//     $("h1").css("color", "purple");
// });

// $(document).keypress(function(event) {
//     $("h1").text(event.key);
// });

// $("h1").on("mouseover", function () {
//     $("h1").css("color", "purple");
// });

// $("button").on("click", function () {
//     $("h1").hide();
// });

// $("button").on("click", function () {
//     $("h1").show();
// });

// $("button").on("click", function () {
//     $("h1").fadeOut();
// });

// $("button").on("click", function () {
//     $("h1").fadeIn();
// });

// $("button").on("click", function () {
//     $("h1").fadeToggle();
// });

// $("button").on("click", function () {
//     $("h1").slideToggle();
// });

// $("button").on("click", function () {
//     $("h1").animate({opacity: 0.5});
// });

$("button").on("click", function () {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});