;(function() {
	
	function Color(red, green, blue, alpha) {
		this.red   = red   || Math.floor( Math.random() * 255 );
		this.green = green || Math.floor( Math.random() * 255 );
		this.blue  = blue  || Math.floor( Math.random() * 255 );
		this.alpha = alpha || 1;
	}
	Color.prototype = {
		mode:  'rgb',
		rgb:   function() { return "rgb("+this.red+","+this.green+","+this.blue+")"; },
		rgba:  function() { return "rgb("+this.red+","+this.green+","+this.blue+","+this.alpha+")"; },
		toString: function() {
			if (this.mode == 'rgb') return this.rgb(); else return this.rgba();
		}
	}
	
	function Moodlight(element, speed) {
		
		var
			color = new Color(),
			final = new Color(),
			_light = this;
		
		speed = speed || 10;
		
		setInterval(function() {
			
			element.style.backgroundColor = color.rgb();
			color = _light.fadeTick( color, final );
			
			if (!color) {
				color = final;
				final = new Color();
			}
			
		}, speed);
		
	}
	Moodlight.prototype = {
		fadeTick: function(start, finish) {
			if ( start.rgb() == finish.rgb() ) return false;
						
			var channels = {
				red: true,
				green: true,
				blue: true
			}
						
			for (var i in channels) {
				if      ( start[i] > finish[i] ) start[i]--;
				else if ( start[i] < finish[i] ) start[i]++;
			}
						
			return start;
		}
	}
	
	window.Moodlight = Moodlight;
	
}());
