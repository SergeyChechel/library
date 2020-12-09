const name = 'John';
console.log($('h2'));
$('h2').eq(0).html(`Это предложение именно для вас, ${name}.`)


$('form').on('submit', sendForm);

function sendForm(e) {
    console.log(this);
    e.preventDefault();
    const formData = new FormData(this);
    $().post('../server.php', formData)
        .then(res => console.log(res));
}