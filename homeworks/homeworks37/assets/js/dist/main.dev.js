"use strict";

// функция подгрузки страницы с ajax
function loadPage(page) {
  $.get('pages/' + page + '.html', function (html) {
    $("#page__content").html(html);
  });
}

;
loadPage('main');
$(function () {
  $('.nav-masthead a').on('click', function (e) {
    e.preventDefault();
    loadPage($(this).attr("href"));
    $('.nav-link.active').removeClass("active");
    $(this).addClass("active");
  });
});