let inter = 600;

$(document).ready(function() {
    setInterval(function() {
        $('#blink').animate({ opacity: 0 }, inter).animate({ opacity: 1 }, inter);
      }, inter*2)   
});
