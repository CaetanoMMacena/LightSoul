
$(function(){

// MENU SCROLL
	$('nav a').click(function(){
		var href = $(this).attr('href');
		var offSetTop = $(href).offset().top;

		$('html,body').animate({'scrollTop':offSetTop})

		return false;

	})

// MENU MOBILE
	$('.mobile').click(function(){
		$(this).find('ul').slideToggle();
	})


// MENU MOBILE
	/*$('.menu .desktop li a').click(function(){
		$(this).find('.lateral').slideToggle();
	})*/


// SLIDER DEPOIMENTOS

	var amtDepoimento = $('.depoimentos-single p').length;
	var curIndex = 0;


	iniciarDepoimento();
	navegarDepoimento();

	function iniciarDepoimento(){
		$('.depoimentos-single').hide();
		$('.depoimentos-single').eq(0).show();
	}

	function navegarDepoimento(){
		$('[next]').click(function(){
				curIndex++;	
			
			if(curIndex >= amtDepoimento)
					curIndex = 0;

			$('.depoimentos-single').hide();
			$('.depoimentos-single').eq(curIndex).show();
						
		})

		$('[prev]').click(function(){
			curIndex--;	
			
			if(curIndex < 0)
					curIndex = amtDepoimento-1;

			$('.depoimentos-single').hide();
			$('.depoimentos-single').eq(curIndex).show();
		})
	} 

//PLUGINS SOCIAL
	$("#social").jsSocials({
    
    shares: ["twitter", "facebook", "linkedin","whatsapp"]
});



// PLUGIN SLIDER - MOSAICO DRONES
	$(function(){
	$('.mosaico-wrapper .mosaico-wrapper-base').slick({
		centerMode:true,
		arrows:false,
		infinite:true,
		dots:true,
		autoplay: true,
		autoplaySpeed: 5000
		})
	});	

// PLUGIN SLIDER - SERVIÇOS
	$(function(){
	$('.servicos .servicos-wrapper-base').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows:false,
		dots:false,
		infinite: true,
		centerMode: true,
		padding: '50px',
		responsive: [

		{
			breakpoint:1300,
			settings: {
				arrows:false,
				centerMode:true,
				slidesToShow:2,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 2000,
				arrows:false,
				dots:false,
				infinite: true,
				padding: '50px',
			}
		},

		{
			breakpoint:980,
			settings: {
				arrows:false,
				centerMode:true,
				slidesToShow:1,
				autoplay: true,
				autoplaySpeed: 2000,
				arrows:false,
				dots:false,
				infinite: true,
				padding: '50px',
			}
		}
		]
	});		

		});


	
//MODAL SERVIÇOS
	$('#jone').click(function() {
      $('#one').popup('toggle');
    });

	$('#jtwo').click(function() {
	      $('#two').popup('toggle');
	    });

	$('#jthree').click(function() {
	      $('#three').popup('toggle');
	    });

	$('#jfour').click(function() {
	      $('#four').popup('toggle');
	    });

	$('#jfive').click(function() {
	      $('#five').popup('toggle');
	    });

//MODAL MÁQUINAS
	$('#maq1').click(function() {
      $('#maqone').popup('toggle');
    });

	$('#maq2').click(function() {
      $('#maqtwo').popup('toggle');
    });
	
	$('#maq3').click(function() {
      $('#maqthree').popup('toggle');
    });


});
	

/*
*/