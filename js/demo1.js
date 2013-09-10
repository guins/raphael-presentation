(function(w, Raphael){
	'use strict';
	
	function _initDemo(){
		var wW = window.innerWidth,
			wH = window.innerHeight,
			paper = Raphael(document.getElementById('paper'), wW, wH),
			circle = paper.circle(wW/2, wH/2, 50);

		circle.attr({
			fill : 'red',
			stroke : 'none'
		});
	}

	// Wait loading
	w.onload = function(){ _initDemo(); };

})(window, Raphael);