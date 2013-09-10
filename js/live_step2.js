(function(Raphael){
	'use strict';

	Raphael.fn.createShot = function(x, y, succeded){
		var shot;

		if( succeded ){
			shot = this.circle(x, y, 20);
		}
		else{
			shot = this.path('M-22,-6h16v-16h12v16h16v12h-16v16h-12v-16h-16z');
			shot.attr({
				transform: 't'+x+','+y
			});
		}

		return shot;
	};

})(Raphael);

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
				randomSucces = Math.round(Math.random()*1) === 1;

			paper.createShot(randomX, randomY, randomSucces);
		}

		shots = paper.setFinish(); // Get all element added to paper since last 'setStart'
	}
	
	// Wait loading
	w.onload = function(){ _initDemo(); };

})(window, Raphael);