console.info('lista de contacte')
//var contacts =['Matei', 'Dan', 'Bogdan'];
var contacts = [];//[
//{phone: '08745843', nume: 'Matei', prenume: 'Nicolae'},
// {phone: '08745844', nume: 'Reut', prenume: 'Danut'},
// {phone: '08745845', nume: 'Babut', prenume: 'Bogdan'}
//];


function getRow(contact) {
    var row = '<tr><td>' + contact.nume + '</td><td>' + contact.prenume + '</td><td>' + contact.phone + '</td>' +
        '<td>[<a href="#" class="remove-contact">x</a>]' + '</td>' +
        '</tr>';
    return row;
}
var table = document.getElementById('contacts-list');
var tbody = table.getElementsByTagName('tbody')[0];


console.info("1)before load contacts");
$.ajax('servlet/contacte-list.json').done(function (contacts) {
    console.info("3)contacts load", contacts);

    contacts.forEach(function (contact) {
        tbody.innerHTML += getRow(contact);
    });

    $('.remove-contact').click(function () {
        var id = $(this).data('id');
        console.info('remove this contact', id, this);
        removeContact(id);
        $(this).closest('tr').remove();


    })

});

//$.ajax('url.json').done(function(){});
console.info("2)after load contacts");
function removeContact(id) {
    $.post('servlet/remove-contact.json', {}
    )
}




