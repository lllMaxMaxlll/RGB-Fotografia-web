$(document).ready(function() {
    // Cambio de header y color de burger
    $(window).on('scroll', function() {
        let posicion = $('#pr').offset();
        if ($(window).scrollTop() >= posicion.top) {
            $('header,#burger').removeClass('transparente');
        } else {
            $('header,#burger').addClass('transparente');
        }
    })
    // Accionamiento de menu lateral
    $('#burger').click(function(){
        $('#burger').toggleClass('abierto');
        $('.menu').toggleClass('abierto');
    })
    // Softscroll
    $('a').on('click', function() {
        if(this.hash !== ''){
            let hash = this.hash
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800)
        }
    })
})