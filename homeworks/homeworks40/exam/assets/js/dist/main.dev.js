"use strict";

$(function () {
  $('.mainScreenSlider').slick({
    vertical: true,
    verticalSwiping: true,
    dots: true,
    lazyLoad: 'progressive',
    touchMove: true
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
        slidesToScroll: 1 //   dots: false

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
}); // $(document).ready(function(){
//     $('.hamburger').click(function(event){
//         $('.header, .hamburger, .mobile_menu').toggleClass('active');
//         $('body').toggleClass('lock')
// });
// });

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
var map = L.map('map').setView([49.4470822958475, 7.899966114385027], 13);
L.tileLayer('	https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.marker([49.4470822958475, 7.899966114385027]).addTo(map).bindPopup('A pretty CSS3 popup.<br> Easily customizable.').openPopup();
$('a[href^="#"').on('click', function () {
  var href = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(href).offset().top
  });
  return false;
});
$(document).ready(function () {
  $('.hamburger').click(function (event) {
    $('.header, .hamburger, .mobileMenu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 800) {
      $("header").addClass("darkBCG");
    } else {
      $("header").removeClass("darkBCG");
    }
  });
});