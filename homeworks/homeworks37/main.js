const API_KEY = '294b52ec'

function loadPage(page) {
    $.get('pages/'+page+'.html', (html) => {
        $("#page__content").html(html);
    })
}

loadPage('main');