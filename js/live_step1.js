(function(w, Raphael){
	'use strict';

	var wW = window.innerWidth,
		wH = window.innerHeight,
		paper,
		shots; // set of shots

	function _initDemo(){
		paper = Raphael(document.getElementById('paper'), wW, wH); //Create Paper

		_createRandomShots(300); // Create shots
	}

	function _createRandomShots(nbOfShots){
		paper.setStart();

		for (var i = 0; i < nbOfShots; i++) {
			var randomX = Math.random()*wW >> 0,
				randomY = Math.random()*wH >> 0,
				randomSucces = Math.round(Math.random()*1) === 1,
				shot;
			
			if( randomSucces ){
				shot = paper.circle(randomX, randomY, 50);
			}
			else{
				shot = paper.path('M-22,-6h16v-16h12v16h16v12h-16v16h-12v-16h-16z');
				shot.attr({
					transform: 't'+randomX+','+randomY
				});
			}
		}

		shots = paper.setFinish(); // Get all element added to paper since last 'setStart'
	}
	
	// Wait loading
	w.onload = function(){ _initDemo(); };

})(window, Raphael);