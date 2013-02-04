var black = '#000000';
var $body = cmg.query('body');

var paint_black = function() {
    $body.css('background-color', black);
};

// side-effect when file is included
cmg.query(function() {
    $body.on('click', paint_black);
});
