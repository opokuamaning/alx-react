import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$("body").append("<p>Click here to get started</p>");
$('body').append('<p id="count"></p>');
$("body").append("<p>Copyright - Holberton School</p>");

let count = 0;

function updateCounter() {
    count++;
    $('#count').html(`${count} clicks on the button`);
}

$('button').on('click', _.debounce(updateCounter, 500));