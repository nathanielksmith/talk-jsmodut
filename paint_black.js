(function() {
    var black = '#000000';
    var $body;

    var paint_it_black = {
        init: function(jq) {
            $ = jq;
            var paint = this.paint.bind(this);
            $(function() {
                $body = $('body');
                $body.on('click', paint);
            });
        },
        paint: function() {
            $body.css('background-color', black);
        }
    };
    window.paint_it_black = paint_it_black;
})();
