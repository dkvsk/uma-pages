$(function () {
  /**
   * Burger
   */

  $(".js-burger").on("click", function () {
    console.log(1);
    $(this).children().toggleClass("active");
    $(".js-menu").slideToggle();
    return false;
  });
});