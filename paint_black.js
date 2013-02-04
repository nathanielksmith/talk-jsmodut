// global
var black = '#000000';
// global
var $body = cmg.query('body');

// global
var paint_black = function() {
    $body.css('background-color', black);
};

cmg.query(function() {
    $body.on('click', paint_black);
});
