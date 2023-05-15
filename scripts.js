(function(){
	'use strict';
	$('#tabs > ul > li > a').click( function(){
			$('#tabs > ul > li > a').css( {background: '#A2a2a2', color: '#CECECE'} );
			$(this).css({background: '#EAEAEA', color: '#333'});
			const thisTab = $(this).attr('href');
			//alert(thisTab);
			$('#tabs > div:visible').fadeOut(200, function(){
				$(thisTab).fadeIn(200);
			});
			
		} );
	
}());