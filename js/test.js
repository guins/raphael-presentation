(function(w, Raphael){
	'use strict';

	var paper;
	
	function _initDemo(){
		var circle, cross;

		paper = Raphael(document.getElementById('paper'), 700, 500),
		circle = paper.circle(200, 250, 50);
		cross = paper.path('M-22,-6h16v-16h12v16h16v12h-16v16h-12v-16h-16z');

		circle.attr({
			fill   : 'blue',
			stroke : 'none'
		});

		cross.attr({
			transform : 't400,250r45',
			fill      : 'red',
			stroke    : 'none'
		});
	}

	// Wait loading
	w.onload = function(){ _initDemo(); };

})(window, Raphael);