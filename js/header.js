 
// قسمت منو همبرگری
$(document).ready(function () {
    $(".hamburger").click(function () {
      $(this).toggleClass("is-active");
    });
  
    $(".three").click(function () {
      if ($(".three").hasClass("active")) {
        closeMenu();
      } else {
        openMenu();
      }
    });
function openMenu() {
    $(".three").addClass("active");
    $(".drawer-menu").animate(
      {
        width: "22vw",
        height: "100vh",
      },
      "slow"
    );
  
    $(".three").animate(
      {
        marginRight: "10vw",
      },
      "slow"
    );
  
    $(".logo").css({
      display: "none",
    });
  }
  function closeMenu() {

    $(".three").removeClass("active");
    $(".drawer-menu").animate(
      {
        width: "0",
        height: "100vh",
      },
      100
    );
    $(".logo").css({
      display: "flex",
    });
    $(".three").animate(
      {
        marginRight: "0vw",
      },
      "slow"
    );
  }
});