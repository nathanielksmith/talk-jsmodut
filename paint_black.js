(function() {
    var black = '#000000';
    var $body;

    var paint_it_black = {
        init: function() {
            var paint = this.paint.bind(this);
            cmg.query(function() {
                $body = cmg.query('body');
                $body.on('click', paint);
            });
        },
        paint: function() {
            $body.css('background-color', black);
        }
    };
    window.paint_it_black = paint_it_black;
})();
