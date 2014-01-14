
$(function() {
	var $showcase = $('.showcase-wrapper'),
		$detail = $showcase.find('.detail'),
		$trigger = $detail.find('.js-close'),
		$cards = $showcase.find('.card'),
		$body = $('body');


	var init = function(){
		$trigger.on('click', function(){
			showGrid();
			return false;
		});

		$cards.on('click', function(){
			showScreen($(this));
			return false;
		});
	}();


	var showGrid = function(){
		$showcase.addClass('showcase-gridview');
	}


	var showScreen = function($card){
		$showcase.removeClass('showcase-gridview');
		if($card){
			$detail.find('[data-project]').hide()
			$detail.find('[data-project="'+$card.data('project')+'"]').show();
		}

		$body.off('click').on('click', function() {
			showGrid();
		});

		$body.off('keyup').on('keyup', function(e) {
			//if user press esc or enter
			if (e.keyCode == 27 || e.keyCode == 13) {
				showGrid();
			}
		});
	}

});