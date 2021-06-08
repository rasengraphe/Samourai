//quand le dom est ready
$(function() {
	//j'injecte le bouton du menu dans le HTML
	$('#header .wrap').append('<i class="btn-menu fa fa-bars fa-2x"></i>');
	//au click sur le bouton
	$('.btn-menu').click(function() {
		//j'ajoute/je supprime une classe .menu-collapse sur le menu
		$('.menu').toggleClass('menu-collapse');
	});

	//retour haut de page
	$('#totop').click(function(){
		$('body, html').animate({
			scrollTop:0
		}, 400);
	});

});