(function(Raphael){
	'use strict';

	Raphael.fn.createShot = function(x, y, succeded){
		var size = 20,
			shot;

		if(succeded){
			shot = this._createShotIn(x, y, size);
		}
		else {
			shot = this._createshotMissed(x, y);
		}

		shot
			.data('succeded', succeded)
			.shotNormalized(true)
			.hover(function(){
				this.shotHighlited();
			},
			function(){
				this.shotNormalized();
			});

		return shot;
	};


	Raphael.fn._createShotIn = function(x, y, size){
		return this.circle(x, y, size);
	};

	Raphael.fn._createshotMissed = function(x, y){
		var shot = this.path('M-22,-6h16v-16h12v16h16v12h-16v16h-12v-16h-16z');
		shot.data('transformDefault', 't'+x+','+y+'r45');
		return shot;
	};

	Raphael.el.shotNormalized = function(withoutAnim){
		var transform = this.data('transformDefault') || '',
			props = {
				transform      : transform + 's1',
				'stroke-width' : 0,
				stroke         : 'grey',
				fill : this.data('succeded') ? 'blue' : 'red'
			};

		if( withoutAnim ){
			this.attr(props);
		}
		else {
			// this.toBack();
			this.stop().animate(props, 500, 'cubic-bezier(0.505, 1.170, 0.510, 1.195)');
		}

		return this;
	};

	Raphael.el.shotHighlited = function(withoutAnim){
		var transform = this.data('transformDefault') || '',
			props = {
				transform       : transform+'s3',
				fill           : 'yellow',
				'stroke-width' : 3,
				stroke         : 'grey'
			};

		if( withoutAnim ){
			this.attr(props);
		}
		else {
			this.toFront();
			this.stop().animate(props, 500, 'cubic-bezier(0.25, 1, 0.55, 0.90)');
		}

		return this;
	};

})(Raphael);

(function(w, Raphael){
	'use strict';

	var wW = window.innerWidth,
		wH = window.innerHeight,
		paper,
		shots;

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