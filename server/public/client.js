console.log('js is working');

$(document).ready(onReady);

function onReady() {
    $('#playerNameButton').on('click', runAddPlayerFunction)
    
}


function runAddPlayerFunction(){
    console.log('player add button clicked');
    let playerName = $('#playerNameValueIn').val();
    console.log(playerName);

    $.ajax({    
        url: '/new',
        type: 'POST',
        data: { 
            playerName: $('#playerNameVlueIn').val(),
        }).then(function (){
            $.ajax({
                type: 'GET',
                url: '/players'
            }).then(function (response) {
                $('#wolfTableBody').empty();
                response.forEach(function (wolf) {
                    $('#wolfTableBody').append(`
                    <tr>
                    <td>${wolves.commonName}</td>
                    <td>${wolves.scientificName}</td>
                    </tr>
                            `);
        });
    });
}); 