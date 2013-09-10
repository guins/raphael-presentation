var APP_DATA = {
	partsNames : ['head', 'left-eye', 'right-eye', 'left-eyebrow', 'right-eyebrow', 'noze', 'mouth', 'hair'],
	partsData : {
		paths : {
			head    : 'M-11,-3h8v-8h6v8h8v6h-8v8h-6v-8h-8z',
			eye     : 'M-11,-3h8v-8h6v8h8v6h-8v8h-6v-8h-8z',
			eyebrow : 'M-11,-3h8v-8h6v8h8v6h-8v8h-6v-8h-8z',
			noze    : 'M-11,-3h8v-8h6v8h8v6h-8v8h-6v-8h-8z',
			mouth   : 'M-11,-3h8v-8h6v8h8v6h-8v8h-6v-8h-8z',
			hair    : 'M-11,-3h8v-8h6v8h8v6h-8v8h-6v-8h-8z'
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
			'left-eye' : function(){
				return {
					x : [-100,10],
					y : [-100,20],
					r : ['toggle', 45, 0],
					c: '#f00'
				};
			},
			'right-eye' : function(){
				return {
					x : [100,10],
					y : [-100,40],
					r : 0,
					c: '#f00'
				};
			},
			'left-eyebrow' : function(){
				return { 
					x : [-100,20],
					y : [-120,30],
					r : [0,40],
					c: '#f00'
				};
			},
			'right-eyebrow' : function(){
				return { 
					x : [100,20],
					y : [-120,20],
					r : [0,40],
					c: '#f00'
				};
			},
			'noze' : function(){
				return { 
					x : 0,
					y : 0,
					r : [0,30],
					c: '#f00'
				};
			},
			'mouth' : function(){
				return { 
					x : [0,20],
					y : [70,10],
					r : ['toggle', 45, 0],
					c: '#f00'
				};
			},
			'hair' : function(){
				return { 
					x : 0,
					y : -300,
					r : [30,40],
					c: '#f00'
				};
			}
		}
	},
	animData : {
		speed   : 800,
		ease  : 'cubic-bezier(0.120, 0.735, 0.405, 1)'
	}
};