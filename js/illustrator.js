(function(Raphael){
	'use strict';

	Raphael.fn.myApp = {
		createHeadPart : function(partName){
			var partNameArr = partName.split('-'),
				partPath = APP_DATA.partsData.paths[ partNameArr[partNameArr.length-1] ],
				part = this.path(partPath);
			
			part
				.attr({ stroke : 0 })
				.data('partName', partName);

			return part;
		}
	};

	Raphael.el.assembled = function(relativePoint){
		var partProps = _processDataProps( APP_DATA.partsData.props[this.data('partName')]() ),
			props = {
				transform : 't'+(relativePoint.x+partProps.x)+','+(relativePoint.y+partProps.y)+'r'+partProps.r,
				fill      : partProps.c
			}
		this.stop().animate(props, APP_DATA.animData.speed, APP_DATA.animData.ease);

		return this;
	};

	Raphael.el.disassembled = function(randomProps, withoutAnim){
		var props = {
				transform : 't'+(randomProps.x)+','+(randomProps.y)+'r'+randomProps.r,
				opacity   : randomProps.o,
				fill      : '#222222'
			}

		if( withoutAnim ){
			this.attr(props);
		}
		else {
			this.stop().animate(props, APP_DATA.animData.speed, APP_DATA.animData.ease);
		}

		return this;
	};

	function _processDataProps(props){
		if(typeof props.x === 'object'){
			props.x = _ramdomizeValue( props.x );
		}
		if(typeof props.y === 'object'){
			props.y = _ramdomizeValue( props.y );
		}
		if(typeof props.r === 'object'){
			props.r = _ramdomizeValue( props.r );
		}

		return props;
	}
	function _ramdomizeValue(value){
		if(value[0] === 'toggle'){
			return Math.round(Math.random()*1) === 1 ? value[1] : value[2];
		}
		else {
			return value[0] + (Math.round(Math.random()*value[1]) - value[1]/2);
		}
	}

})(Raphael);

(function(w, Raphael){
	'use strict';

	var wW = window.innerWidth,
		wH = window.innerHeight,
		container,
		paper,
		head,
		assembled = false;

	function _initDemo(){
		container = document.getElementById('paper'),
		paper = Raphael(container, wW, wH);
		head = paper.set();

		_createHeadParts();

		container.onclick = _changeHeadAppearence;
	}

	function _createHeadParts(){

		var headParts = APP_DATA.partsNames,
			nbOfParts = headParts.length;

		for (var i = 0; i < nbOfParts; i++) {
			var part = paper.myApp.createHeadPart.call(paper, headParts[i]);
			
			part.disassembled( _getRandomProps(), true );
			head.push( part );
		};
	}

	function _changeHeadAppearence(event){
		
		if( !assembled ){
			var clickedPoint = {
				x : event.x,
				y : event.y
			};
			
			head.forEach(function(part){
				part.assembled(clickedPoint);
			});

			assembled = true;
		}
		else {
			head.forEach(function(part){
				part.disassembled( _getRandomProps() );
			});

			assembled = false;
		}
	};

	function _getRandomProps(){
		var marge = 100;

		return {
			o : ((Math.random()*60 >> 0)+10)/100,
			x : Math.random()*(wW-marge) >> 0,
			y : Math.random()*(wH-marge) >> 0,
			r : Math.random()*360 >> 0
		};
	}

	// Wait loading
	w.onload = function(){ _initDemo(); };

})(window, Raphael);