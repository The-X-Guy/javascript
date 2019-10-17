function variables () {
    let user = $('#user').val();
    let message = $('#message').val();
    return [user, message];
}

function limpiar () {
    $(user).val('');
    $(message).val(''); 
}
function writeMessage () {
    variables1 = variables ();
    let message = $('<p>'+variables1[0]+' : '+variables1[1]+'</p>');
    return message;
}