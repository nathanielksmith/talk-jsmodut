var black = '#000000';
// assumes medley
var $body = cmg.query('body');

var paint_black = function() {
    $body.css('background-color', black);
};

// assumes medley
cmg.query(function() {
    $body.on('click', paint_black);
});
