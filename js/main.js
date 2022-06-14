$(document).ready(function() {
    // Cambio de header
    $(window).on('scroll', function() {
        let posicion = $('#pr').offset();
        if ($(window).scrollTop() >= posicion.top) {
            $('header,#burger').removeClass('transparente');
        } else {
            $('header,#burger').addClass('transparente');
        }
    })
    $('#burger').click(function(){
        $('#burger').toggleClass('abierto');
        $('.menu').toggleClass('abierto');
    })
})