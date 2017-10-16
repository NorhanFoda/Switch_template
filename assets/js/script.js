$('document').ready(function(){
	$('.owl-carousel').owlCarousel({
	loop:true,
    items:1,
    nav: true,
	navText:['','Scroll down <i class="fa fa-arrow-down" aria-hidden="true"></i>'],
	autoplayHoverPause: true,
	animateOut: 'slideOutDown',
	animateIn: 'slideInDown'
});
});

// $('document').ready(function(){
// 	$('#scroll').click(function(){
// 		var images = ['../imgs/1.jpg','../imgs/2.jpeg',
// 			'../imgs/3.jpg'];

// 		var next_image = 0;

// 		do_slide();

// 		function do_slide(){
// 			if(next_image >= images.length)
// 			{
// 				next_image = 0;
// 			}
// 			else
// 			{
// 				$('.header')
// 				.css('background-image','url("'+images[next_image++]+'")')
// 				.slideDown();
// 			}
// 		}
// 	});
// });