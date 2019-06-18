
const getAllChirps = () => {
    $.ajax({
        type: "GET",
        url: "/api/chirps/"
    })
        .then(chirps => {
            $('ul').empty();
            chirps.forEach(chirp => {
                $('ul').append(
                `<li id=${chirp.id} class="list-group-item"> 
                    <div class="row d-flex justift-content-between">
                        <div class="col">
                            <h4 class="col">${chirp.text}</h4>
                        </div>
                        <div class="col">
                            <button id="updateBtn" data-toggle="modal" data-target="#updateModal" onclick="updateChirp(${chirp.id})"> Update </button>
                            <button id="deleteBtn" onclick="deleteChirp(${chirp.id})"> X </button>
                        </div>
                    </div>
   
                    <div>
                        <p class="m-2">Chirp ID: ${chirp.id} </p>
                    </div>
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
    $.ajax({
        type: "DELETE",
        url: '/api/chirps/' + id,
    })
        .then(() => {
            getAllChirps();
        })
}

const updateChirp = (id, text) => {
    $('#newInput').val(text);
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





