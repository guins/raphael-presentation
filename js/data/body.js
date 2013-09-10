var APP_DATA = {
	partsNames : ['head', 'left-arm', 'right-arm', 'left-leg', 'right-leg', 'body'],
	partsData : {
		paths : {
			head : 'M-11,-3h8v-8h6v8h8v6h-8v8h-6v-8h-8z',
			arm  : 'M-11,-3h8v-8h6v8h8v6h-8v8h-6v-8h-8z',
			leg  : 'M-11,-3h8v-8h6v8h8v6h-8v8h-6v-8h-8z',
			body : 'M-11,-3h8v-8h6v8h8v6h-8v8h-6v-8h-8z'
		},
		props : {
			head : function(){ 
				return {
					x : 0,
					y : 0,
					r : 0,
					c: '#f00'
				};
			},
			'left-arm' : function(){
				return {
					x : [-100,10],
					y : [-100,20],
					r : ['toggle', 45, 0],
					c: '#f00'
				};
			},
			'right-arm' : function(){
				return {
					x : [100,10],
					y : [-100,40],
					r : 0,
					c: '#f00'
				};
			},
			'left-leg' : function(){
				return { 
					x : [-100,20],
					y : [-120,30],
					r : [0,40],
					c: '#f00'
				};
			},
			'right-leg' : function(){
				return { 
					x : [100,20],
					y : [-120,20],
					r : [0,40],
					c: '#f00'
				};
			},
			'body' : function(){
				return { 
					x : 0,
					y : 0,
					r : [0,30],
					c: '#f00'
				};
			}
		}
	},
	animData : {
		speed   : 800,
		ease  : 'cubic-bezier(0.950, -0.320, 0.000, 1.645)'
	}
};