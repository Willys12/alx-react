import $ from 'jquery';
import _ from 'lodash';

// Adding a new paragraph to the body
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'>{count} clicks on the button</p>");
$('body').append('<p>Copyright - Holberton School</p>');

// Button click event function updateCounter() and tracks how many times button is clicked.
$('#button').click(updateCounter);

let count = 0;

function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}
// binding the debounce function to the click event on button
const debounceUpdateCounter = _.debounce(updateCounter, 300);
$('button').on('click', debounceUpdateCounter);
