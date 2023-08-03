const headerNav = document.querySelectorAll(".header_nav_link");

headerNav.forEach(function (element) {
  element.addEventListener("click", open);
});

function open(evt) {
  const headerNavTarget = evt.currentTarget;

  headerNav.forEach(function (item) {
    item.classList.remove("header_nav_link--active");
  });

  headerNavTarget.classList.add("header_nav_link--active");
}

$(document).ready(function () {
  var headerMobile = $(".header_mobile");
  $(".hamburger").on("click", function () {
    headerMobile.addClass("is-active");
  });
  $(".hamburger_exit").on("click", function () {
    headerMobile.removeClass("is-active");
  });
});
