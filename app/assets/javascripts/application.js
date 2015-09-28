function changeHeight() {
  var windowHeight = $(window).height();
  var footerHeight = $("footer").height();
  $(".page-holder").css({
    "padding-bottom": footerHeight,
    "min-height": windowHeight
  });
}
window.addEventListener('resize', changeHeight);
changeHeight();