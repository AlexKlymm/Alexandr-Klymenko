$(function(){
    $('.mainScreenSlider').slick({
        vertical: true,
        verticalSwiping:true,
        dots: true,
        lazyLoad: 'progressive',
        touchMove: true,

    });
    
    $('.newsSlider').slick({
        arrows: true,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    })
});


const whoWriteArticle = [
    {
        writer: "Alja Brun",
        articleBirthday: "20 Jan 2020",
        titleArticle: "See the unmatched beauty of the great.",
        articleText: "Free directories: directories are perfect for customers that are searching for...",
        articleImg: "assets/photos/IndustrialForNews1.png",
        writerImg: "assets/photos/person1.png"
    },
    {
        writer: "Dominic Freeman",
        articleBirthday: "13 Dec 2019",
        titleArticle: "Effective advertsing pointers.",
        articleText: "Having a home based business is a wonderful asset to your life...",
        articleImg: "assets/photos/IndustrialForNews2.png",
        writerImg: "assets/photos/person2.png"
    },
    {
        writer: "Alice Ward",
        articleBirthday: "30 Nov 2019",
        titleArticle: "Hypnotize yourself into the ghost.",
        articleText: "There are many things that are important to catalog design...",
        articleImg: "assets/photos/IndustrialForNews3.png",
        writerImg: "assets/photos/person3.png"
    },
    {
        writer: "Ella Ward",
        articleBirthday: "30 Nov 2019",
        titleArticle: "Example: 4",
        articleText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        articleImg: "assets/photos/IndustrialForNews3.png",
        writerImg: "assets/photos/person3.png"
    },
    {
        writer: "Allina Ward",
        articleBirthday: "30 Nov 2019",
        titleArticle: "Example: 5",
        articleText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        articleImg: "assets/photos/IndustrialForNews3.png",
        writerImg: "assets/photos/person3.png"
    },
    {
        writer: "Tanya Ward",
        articleBirthday: "30 Nov 2019",
        titleArticle: "Example: 6",
        articleText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        articleImg: "assets/photos/IndustrialForNews3.png",
        writerImg: "assets/photos/person3.png"
    },
    {
        writer: "Diana Ward",
        articleBirthday: "30 Nov 2019",
        titleArticle: "Example: 7",
        articleText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        articleImg: "assets/photos/IndustrialForNews3.png",
        writerImg: "assets/photos/person3.png"
    },
    {
        writer: "Zinaida Ward",
        articleBirthday: "30 Nov 2019",
        titleArticle: "Example: 8",
        articleText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        articleImg: "assets/photos/IndustrialForNews3.png",
        writerImg: "assets/photos/person3.png"
    },
    {
        writer: "Katya Ward",
        articleBirthday: "30 Nov 2019",
        titleArticle: "Example: 9",
        articleText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        articleImg: "assets/photos/IndustrialForNews3.png",
        writerImg: "assets/photos/person3.png"
    },
    {
        writer: "Aljona Ward",
        articleBirthday: "30 Nov 2019",
        titleArticle: "Example: 10",
        articleText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        articleImg: "assets/photos/IndustrialForNews3.png",
        writerImg: "assets/photos/person3.png"
    },
    {
        writer: "Albina Ward",
        articleBirthday: "30 Nov 2019",
        titleArticle: "Example: 11",
        articleText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        articleImg: "assets/photos/IndustrialForNews3.png",
        writerImg: "assets/photos/person3.png"
    },
    {
        writer: "Aktaviana Ward",
        articleBirthday: "30 Nov 2019",
        titleArticle: "Example: 12",
        articleText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        articleImg: "assets/photos/IndustrialForNews3.png",
        writerImg: "assets/photos/person3.png"
    },
    {
        writer: "Viktorya Ward",
        articleBirthday: "30 Nov 2019",
        titleArticle: "Example: 13",
        articleText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        articleImg: "assets/photos/IndustrialForNews3.png",
        writerImg: "assets/photos/person3.png"
    },
    {
        writer: "Sara Ward",
        articleBirthday: "30 Nov 2019",
        titleArticle: "Example: 14",
        articleText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        articleImg: "assets/photos/IndustrialForNews3.png",
        writerImg: "assets/photos/person3.png"
    },
    {
        writer: "Kira Ward",
        articleBirthday: "30 Nov 2019",
        titleArticle: "Example: 15",
        articleText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        articleImg: "assets/photos/IndustrialForNews3.png",
        writerImg: "assets/photos/person3.png"
    }
];

function rez() {
    let html = '';
    whoWriteArticle.forEach(article => {
        html+= `
            <div class="sliderItem">
                <img src="${article.articleImg}" alt="">
                <div class="articleWrapper">
                    <div class="textWrapper">
                        <h5>${article.titleArticle}</h5>
                        <p>${article.articleText}</p>
                    </div>
                    <div class="writerWrapper">
                        <img src="${article.writerImg}" alt="">
                        <div>
                            <p>${article.writer}</p>
                            <span>${article.articleBirthday}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    document.getElementById('newsSlider1').innerHTML = html;    
};
rez();

let gallery = document.getElementById('gallery');
lightGallery(gallery);