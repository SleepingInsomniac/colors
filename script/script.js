// bleh

window.onload = function() {
	
	var color1 = randomColor();
	var color2 = randomColor();
	
	document.body.style.backgroundColor = 'rgb('+color1.join(', ')+')';
	
	setInterval(function() {
		if (color1.join() === color2.join()) {
			color2 = randomColor();
			console.log('got new color: '+color2);
		}
		color1 = fadeColorsStep(color1, color2);
		document.body.style.backgroundColor = 'rgb('+color1.join(', ')+')';
	}, 10);
		
}

function fadeColorsStep(color1, color2) {
	// console.log(color1);
	for (var i = 0; i < 3; i++) {
		if (color1[i] > color2[i]) {
			color1[i]--;
		} else if (color1[i] < color2[i]) {
			color1[i]++;
		}
	}
		
	return color1;
}

function randomColor() {
	var colors = [];
	for (var i = 0; i < 3; i++) colors.push(Math.floor(Math.random() * 255));
	return colors;
}