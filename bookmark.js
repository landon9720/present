// bookmarklet source
javascript:(function() {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'http://localhost:8888/present.js';
	var head = document.getElementsByTagName('head')[0];
	head.appendChild(script);
})();