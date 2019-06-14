const postChirp = text => {
    let body = text;
        $.ajax('/', function() {
        $('ul').append(`<li class="list-group-item"> ${body} </li>`);
    })
};

$('.btn').click(e => {
    e.preventDefault();
    let text = $('#id').val();
    postChirp(text);
})