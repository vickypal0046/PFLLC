"use strict";

wavify(function() {

	

	var wave1 = wavify('#feel-the-wave').wavify({
	  height: 60,
	  bones: 4,
	  amplitude: 88,
	  color: '#fbfbfb',
	  speed: .15
	});

	var wave2 = wavify('#feel-the-wave-2').wavify({
	  height: 60,
	  bones: 3,
	  amplitude: 88,
	  color: '#f9f9f9',
	  speed: .25
	});


});