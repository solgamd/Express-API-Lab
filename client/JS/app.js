const removeListItem = (id) => {

    $('ul').find('li' + id).remove();

    alert('removeListItem worked')
}

const deleteChirp = (id) => {
    alert('Button works');
    $.ajax({
        type: "DELETE",
        url: `/api/chirps/:${id}`,
        data: JSON,
        success: function() {
            console.log();
            // $('ul').find('li' + id).remove();

        }
    })
        .then(() => removeListItem());
}

const getAllChirps = () => {
    $.ajax({
        type: "GET",
        url: "/api/chirps/"
    })
        .then(chirps => {
            $('ul').empty();
            chirps.forEach(chirp => {
                $('ul').append(`<li class="list-group-item"> 
            ${chirp.text} 
            <button onclick="deleteChirp()"> X </button>
            </li>`)
            })
        })
};
getAllChirps();

const postChirp = (text) => {
    let newChirp = {
        user: "Katze",
        text
    }
    $.ajax({
        type: "POST",
        url: '/api/chirps/',
        data: newChirp
    })
        .then(() => getAllChirps());
};

$('.btn').click(e => {
    e.preventDefault();
    let text = $('#text').val();
    postChirp(text);
    $('#text').val('');
});