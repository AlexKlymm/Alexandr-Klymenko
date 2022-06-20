"use strict";

$(function () {
  $('.mainScreenSlider').slick({
    vertical: true,
    verticalSwiping: true,
    dots: true,
    lazyLoad: 'progressive',
    touchMove: true,
    breakpoint: 555,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{
      breakpoint: 800,
      settings: {
        dots: false
      }
    }]
  });
  $('.newsSlider').slick({
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{
      breakpoint: 1430,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }, {
      breakpoint: 555,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false
      }
    }]
  });
});
var whoWriteArticle = [{
  writer: "Alja Brun",
  articleBirthday: "20 Jan 2020",
  titleArticle: "See the unmatched beauty of the great.",
  articleText: "Free directories: directories are perfect for customers that are searching for...",
  articleImg: "assets/photos/IndustrialForNews1.png",
  writerImg: "assets/photos/person1.png"
}, {
  writer: "Dominic Freeman",
  articleBirthday: "13 Dec 2019",
  titleArticle: "Effective advertsing pointers.",
  articleText: "Having a home based business is a wonderful asset to your life...",
  articleImg: "assets/photos/IndustrialForNews2.png",
  writerImg: "assets/photos/person2.png"
}, {
  writer: "Alice Ward",
  articleBirthday: "30 Nov 2019",
  titleArticle: "Hypnotize yourself into the ghost.",
  articleText: "There are many things that are important to catalog design...",
  articleImg: "assets/photos/IndustrialForNews3.png",
  writerImg: "assets/photos/person3.png"
}, {
  writer: "Ella Ward",
  articleBirthday: "30 Nov 2019",
  titleArticle: "Example: 4",
  articleText: "Lorem ipsum dolor sit amet consectetur adipisicing elit,amet consectetur adipisicing elit.",
  articleImg: "assets/photos/IndustrialForNews3.png",
  writerImg: "assets/photos/person3.png"
}, {
  writer: "Allina Ward",
  articleBirthday: "30 Nov 2019",
  titleArticle: "Example: 5",
  articleText: "Lorem ipsum dolor sit amet consectetur adipisicing elit,amet consectetur adipisicing elit.",
  articleImg: "assets/photos/IndustrialForNews3.png",
  writerImg: "assets/photos/person3.png"
}, {
  writer: "Tanya Ward",
  articleBirthday: "30 Nov 2019",
  titleArticle: "Example: 6",
  articleText: "Lorem ipsum dolor sit amet consectetur adipisicing elit,amet consectetur adipisicing elit.",
  articleImg: "assets/photos/IndustrialForNews3.png",
  writerImg: "assets/photos/person3.png"
}, {
  writer: "Diana Ward",
  articleBirthday: "30 Nov 2019",
  titleArticle: "Example: 7",
  articleText: "Lorem ipsum dolor sit amet consectetur adipisicing elit,amet consectetur adipisicing elit.",
  articleImg: "assets/photos/IndustrialForNews3.png",
  writerImg: "assets/photos/person3.png"
}, {
  writer: "Zinaida Ward",
  articleBirthday: "30 Nov 2019",
  titleArticle: "Example: 8",
  articleText: "Lorem ipsum dolor sit amet consectetur adipisicing elit,amet consectetur adipisicing elit.",
  articleImg: "assets/photos/IndustrialForNews3.png",
  writerImg: "assets/photos/person3.png"
}, {
  writer: "Katya Ward",
  articleBirthday: "30 Nov 2019",
  titleArticle: "Example: 9",
  articleText: "Lorem ipsum dolor sit amet consectetur adipisicing elit,amet consectetur adipisicing elit.",
  articleImg: "assets/photos/IndustrialForNews3.png",
  writerImg: "assets/photos/person3.png"
}, {
  writer: "Aljona Ward",
  articleBirthday: "30 Nov 2019",
  titleArticle: "Example: 10",
  articleText: "Lorem ipsum dolor sit amet consectetur adipisicing elit,amet consectetur adipisicing elit.",
  articleImg: "assets/photos/IndustrialForNews3.png",
  writerImg: "assets/photos/person3.png"
}, {
  writer: "Albina Ward",
  articleBirthday: "30 Nov 2019",
  titleArticle: "Example: 11",
  articleText: "Lorem ipsum dolor sit amet consectetur adipisicing elit,amet consectetur adipisicing elit.",
  articleImg: "assets/photos/IndustrialForNews3.png",
  writerImg: "assets/photos/person3.png"
}, {
  writer: "Aktaviana Ward",
  articleBirthday: "30 Nov 2019",
  titleArticle: "Example: 12",
  articleText: "Lorem ipsum dolor sit amet consectetur adipisicing elit,amet consectetur adipisicing elit.",
  articleImg: "assets/photos/IndustrialForNews3.png",
  writerImg: "assets/photos/person3.png"
}, {
  writer: "Viktorya Ward",
  articleBirthday: "30 Nov 2019",
  titleArticle: "Example: 13",
  articleText: "Lorem ipsum dolor sit amet consectetur adipisicing elit,amet consectetur adipisicing elit.",
  articleImg: "assets/photos/IndustrialForNews3.png",
  writerImg: "assets/photos/person3.png"
}, {
  writer: "Sara Ward",
  articleBirthday: "30 Nov 2019",
  titleArticle: "Example: 14",
  articleText: "Lorem ipsum dolor sit amet consectetur adipisicing elit,amet consectetur adipisicing elit.",
  articleImg: "assets/photos/IndustrialForNews3.png",
  writerImg: "assets/photos/person3.png"
}, {
  writer: "Kira Ward",
  articleBirthday: "30 Nov 2019",
  titleArticle: "Example: 15",
  articleText: "Lorem ipsum dolor sit amet consectetur adipisicing elit,amet consectetur adipisicing elit.",
  articleImg: "assets/photos/IndustrialForNews3.png",
  writerImg: "assets/photos/person3.png"
}];

function rez() {
  var html = '';
  whoWriteArticle.forEach(function (article) {
    html += "\n            <div class=\"sliderItem\">\n                <img src=\"".concat(article.articleImg, "\" alt=\"\" class=\"articleImg\">\n                <div class=\"articleWrapper\">\n                    <div class=\"textWrapper\">\n                        <h5>").concat(article.titleArticle, "</h5>\n                        <p>").concat(article.articleText, "</p>\n                    </div>\n                    <div class=\"writerWrapper\">\n                        <img src=\"").concat(article.writerImg, "\" alt=\"\">\n                        <div>\n                            <p>").concat(article.writer, "</p>\n                            <span>").concat(article.articleBirthday, "</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        ");
  });
  document.getElementById('newsSlider1').innerHTML = html;
}

;
rez();
var gallery = document.getElementById('gallery');
lightGallery(gallery);
var map = L.map('map').setView([0, 0], 3);
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.marker([40.724086583013424, -74.00454389646227]).addTo(map).bindPopup('New York City, United States - 1776 feet.').openPopup();
L.marker([22.319277867978162, 114.17165421538124]).addTo(map).bindPopup('Hong Kong - 1588 feet.').openPopup();
$('a[href^="#"').on('click', function () {
  var href = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(href).offset().top
  });
  return false;
});

function addContacts() {
  var html = '';
  html += "\n    <form name=\"contactsForm\">\n        <div class=\"subtitlebox\">\n            <div></div>\n            <h4 class=\"subtitle\">\n                Get in touch\n            </h4>\n        </div>\n        <div class=\"contactWrapper\">\n            <div class=\"ourContacts\">\n                <ul>\n                <li><i class=\"icon-location icomoonBCGColor\"></i> 91 Nolan Extensions Suite 670</li>\n                <li><i class=\"icon-phone icomoonBCGColor\"></i> +001 356-868-2454</li>\n                <li><i class=\"icon-envelop icomoonBCGColor\"></i> montichello@service.com</li>\n                <li><i class=\"icon-clock icomoonBCGColor\"></i> From 07:05AM to 19:30PM</li>\n                </ul>\n            </div>\n            <div class=\"userContacts\">\n                <input type=\"text\" placeholder=\"Name\" method=\"get\" minlength=\"5\" maxlength=\"15\" action=\"#\" name=\"userName\">\n                <input type=\"email\" placeholder=\"qwerty@mypost.com\" method=\"get\" minlength=\"3\" action=\"#\" name=\"userEmail\">\n                <button type=\"button\" class=\"button sendUserDate\">Submit</button>\n            </div>\n        </div>\n    </form>\n    ";
  document.getElementById('contacts').innerHTML = html;
}

addContacts();

function checkUsersDate() {
  var html = '';
  html += "\n    <div class=\"infoForUser\">\n        <h6>You need write required values:</h6>\n        <ul>\n            <li class=\"text\">Your fields must be filled!</li>\n            <li class=\"text\">Your name and email must be longer, then 3 symbols</li>\n            <li class=\"text\">Your name must be smaller, then 15 symbols</li>\n            <li class=\"text\">You write wrong email! Don't use any symbols, except: \"@\"</li>\n            <li class=\"text\">Email example: qwerty@mypost.com</li>\n            <p class=\"text\">\n                Please, just try again! If you have problems with date form, \n                you can call our service center and we can make all themselves for you\n                or you can write us on email: montichello@service.com\n            </p>\n        </ul>\n    </div>\n        ";
  document.getElementById('contacts').innerHTML = html;
}

;

function isValidEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function showResult(elements) {
  $(function () {
    $('.contacts').add(elements);
    setTimeout(function () {
      addContacts();
    }, 10000);
  });
}

;

function userRequired() {
  var html = '';
  html += "\n            <div class=\"userRequired\">\n                <h6>Your date has been required!</h6>\n                <p class=\"text\">Congratulations and thank you for your experience with us!</p>\n                <p class=\"text\">\n                    We will send you answer back in 1-2 work day. \n                    If you have terminable questions - call us: +001 356-868-2454.\n                </p>\n            </div>\n        ";
  document.getElementById('contacts').innerHTML = html;
}

;
$(function () {
  $('.hamburger').click(function (event) {
    $('.header, .hamburger, .mobileMenu').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $(window).scroll(function () {
    if ($(document).scrollTop() > 800) {
      $("header").addClass("darkBCG");
    } else {
      $("header").removeClass("darkBCG");
    }
  });
  $('.sendUserDate').on("click", function () {
    var mainForm = document.forms.contactsForm;
    var userEmail = mainForm.userEmail.value;
    var userName = mainForm.userName.value;

    if (userName === '' || userEmail === '') {
      showResult(checkUsersDate);
    } else if (userEmail.length < 3 || userName.length < 3) {
      showResult(checkUsersDate);
    } else if (isValidEmail(userEmail) === false) {
      showResult(checkUsersDate);
    } else {
      showResult(userRequired);
    }
  });
});