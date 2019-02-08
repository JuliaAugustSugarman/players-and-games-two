console.log('js is working');

$(document).ready(onReady);

function onReady() {
    $('#playerNameButton').on('click', runAddPlayerFunction)
    $.ajax({
        type: 'GET',
        url: '/players'
    }).then(function (taco) { //the response is the object array
        $('#uL').empty();
        for (let i = 0; i < taco.length; i++) {
            $('#playerNameValueIn').append(`
                        <li>${taco[i].playerName}</li>
                    `);
        } //end for loop
        
})


function runAddPlayerFunction() {
    console.log('player add button clicked');
    let playerName = $('#playerNameValueIn').val();
    console.log(playerName);

    $.ajax({
        url: '/new',
        type: 'POST',
        data: {
            playerName: $('#playerNameValueIn').val(),
        }
    }).then(function() {
        $.ajax({
            type: 'GET',
            url: '/players'
        }).then(function (taco) { //the response is the object array
            $('#uL').empty();
            for (let i = 0; i < taco.length; i++) {
                    $('#uL').append(`
                        <li>${taco[i].playerName}</li>
                    `);
            } //end for loop
            }) //end then function 2
        })//end then function 1
    
    }//end runAdd Player
}