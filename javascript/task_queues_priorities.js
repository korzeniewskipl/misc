/**
 * Proof for several task queues with various priorities.
 *
 * Test 2 cases:
 * - run code and click anywhere immediately
 * - run code and click anywhere after 2 seconds
 *
 * In the first case 'click event' should be printed first.
 * In the second case 'ajax event' should be printed first.
 *
 * 'timer event' will always be printed last, even then when
 * fired first (like in this example).
 *
 * See:
 * - http://stackoverflow.com/questions/19743354/does-javascript-event-queue-have-priority/21558672#21558672
 */
setTimeout(function() {
    console.log('timer event');
}, 0);
$(document).click(function() {
    console.log('click event');
});
$.ajax('http://httpbin.org/delay/2', {async: true, complete: function() {
    console.log('ajax event');
}});

// block JavaScript thread
$.ajax('http://httpbin.org/delay/5', {async: false});

