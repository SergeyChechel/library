import './lib/lib';
import $ from './lib/lib';

$('#first').on('click', () => {
    $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).click(() => {
    $('.w-500').fadeToggle(800);
});

$('.btn-dark').attr('data-id', '7');


$('.wrap').html(
    `<div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
        <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
            <a href="#" class="dropdown-item">Action</a>
            <a href="#" class="dropdown-item">Action #2</a>
            <a href="#" class="dropdown-item">Action #3</a>
        </div>
    </div>`
);

$('.dropdown-toggle').eq(0).dropdown();



$('#trigger').click(() => $('#trigger').createModal({
    text: {
        title: 'Modal title #1',
        body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate sit est nostrum nihil earum aperiam? Vitae sunt dicta, delectus quasi perspiciatis modi eius autem a qui architecto incidunt eum repudiandae!'
    }, 
    btns: {
        count: 3,
        settings: [
            [
                'Close',
                ['btn-danger', 'mr-10'],
                true
            ],
            [
                'Save changes',
                ['btn-success'],
                false,
                () => {
                    alert('Данные сохранены');
                }
            ],
            [
                'Another btn',
                ['btn-warning', 'ml-10'],
                false,
                () => {
                    alert('Hello World')
                }
            ]
        ]
    }
}));

console.log($('.accordion-head'));