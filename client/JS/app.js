
const getAllChirps = () => {
    $.ajax({
        type: "GET",
        url: "/api/chirps/"
    })
        .then(chirps => {
            $('ul').empty();
            chirps.forEach(chirp => {
                $('ul').append(`<li id=${chirp.id} class="list-group-item"> 
                [${chirp.id}] ${chirp.text}
            <button id="updateBtn" data-toggle="modal" data-target="#updateModal" onclick="updateChirp(${chirp.id})"> Update </button>
            <button id="deleteBtn" onclick="deleteChirp(${chirp.id})"> X </button>
            </li>`)
            })
        })
};
getAllChirps();

const postChirp = (text) => {
    let newChirp = {
        user: "SomeAnimal",
        text
    }
    $.ajax({
        type: "POST",
        url: '/api/chirps/',
        data: newChirp
    })
        .then(() => getAllChirps());
};

$('.submitBtn').click(e => {
    e.preventDefault();
    let text = $('#text').val();
    postChirp(text);
    $('#text').val('');
});

const deleteChirp = (id) => {
    alert('Delete button works');
    $.ajax({
        type: "DELETE",
        url: '/api/chirps/' + id,   
    })
    .then(() => {
        $('li#' + id).remove(); 
    })
}
getAllChirps();

const updateChirp = (id, chirp) => {
    
    $('#updateModal').modal();
    $('#saveBtn').on('click', function () {
        let newMsg = $('#newInput').val();
        $.ajax({
            type: "PUT",
            url: '/api/chirps/' + id,
            data: {
                text: newMsg
            }
        })
        getAllChirps();
    })
};





