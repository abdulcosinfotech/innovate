// ----------------------------------------------------------------------------
// Moving Animation

(function($) {
    $(document).ready(function() {
        $('#clouds').pan({
            fps: 30,
            speed: 0.7,
            dir: 'left',
            depth: 10
        });
        $('#clouds-1').pan({
            fps: 30,
            speed: 3,
            dir: 'right',
            depth: 30
        });
        $('#clouds-2').pan({
            fps: 30,
            speed: 2,
            dir: 'left',
            depth: 20
        });
        $('#clouds-2, #clouds-1, #clouds').spRelSpeed(8);
    });
})(jQuery);