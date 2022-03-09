// // Set aspect ratio of .box
// var aspect_ratio = 1;
// // Store the jQuery object for future reference
// var $box = jQuery(".figure-image");
// // Initial resize of .box
// jQuery(document).ready(function ($) {
//   $box.height($box.width() * aspect_ratio);
// });
// // Resize .box on browser resize
// jQuery(window).resize(function () {
//   $box.height($box.width() * aspect_ratio);
// });

// navbar add efek shadow
const nav = document.querySelector("nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight) {
    nav.classList.add("nav-outline");
  } else {
    nav.classList.remove("nav-outline");
  }
}
// card jquery event click to location
$(".card-hero").on("click", function (e) {
  var tujuan = $(this).attr("href");
  console.log(tujuan);
  var elemenTujuan = $(tujuan);
  $("html,body").animate({
    scrollTop: elemenTujuan.offset().top - 55,
  });
  e.preventDefault();
});

// to top navbar animate
$(".logoNav").on("click", function (e) {
  $("html,body").animate({
    scrollTop: $(this).scrollTop(),
  });
  e.preventDefault();
});
$(".js-example-placeholder-single").select2({
  placeholder: "English",
  width: "100%",
});
