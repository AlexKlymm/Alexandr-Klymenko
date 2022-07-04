"use strict";

var API_KEY = '294b52ec';

function loadPage(page) {
  $.get('pages/' + page + '.html', function (html) {
    $("#page__content").html(html);
  });
}

loadPage('main');