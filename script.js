//http://jsfiddle.net/9SDLw/
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 700);
    return false;
});

/*
$(document).ready(function(){
    $("#todos").click(function(){
        $(".catedras").delay(500).fadeIn();
        $(".coordenacoes").delay(500).fadeIn();
    });
});

$(document).ready(function(){
    $("#cated").click(function(){
        $(".coordenacoes").fadeOut();
        $(".catedras").delay(500).fadeIn();
    });
});

$(document).ready(function(){
    $("#coord").click(function(){
        $(".catedras").fadeOut();
        $(".coordenacoes").delay(500).fadeIn();
    });
});

//Responsive Grid Gallery with Tag Filter

$(function () {
		
	var filterList = {
	
		init: function () {
		
			// MixItUp plugin
			// http://mixitup.io
			$('#portfoliolist').mixItUp({
				selectors: {
  			  target: '.card',
  			  filter: '.filter'	
  		  },
  		  load: {
    		  filter: '.todos' // show app tab on first load
    		}     
			});								
		
		}

	};
	
	// Run the show!
	filterList.init();
	
});*/

//-------------------------------*******-------------------------

$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
//            $('.filter').removeClass('hidden');
            $('.filter').fadeIn();
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');

            $(".filter").not('.'+value).fadeOut(300);
            setTimeout(function(){
			$('.filter').filter('.'+value).fadeIn();},250);			
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");
});

//-------------------------------------------------------------------------------

$('#exampleModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

$('#exampleModal').modal('options');

//-------------------------------------------------------------------------

$('.card').on('click', function() {
	$.ajax({
          url: 'neam.html', // página da requisição externa
          type: 'GET',
          // parâmetro "html" vem com o conteúdo da página completo
          success: function(html) {

           // Pegamos somente <li> da página externa
            var $lis = $(html).find('#neam');

        }
	}); 
 }); 