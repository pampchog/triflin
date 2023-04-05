function main() {
  var url="https://service-95rd.onrender.com/"
  win=window.open(); win.document.body.style.margin='0';
  win.document.body.style.height='100vh';
  var iframe=win.document.createElement('iframe');
  iframe.style.border='none';
  iframe.style.width='100%';
  iframe.style.height='100%';
  iframe.style.margin='0';
  iframe.referrerpolicy='no-referrer';
  iframe.allow='fullscreen';
  iframe.src=url.toString();
  win.document.body.appendChild(iframe);
}

var pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var current = 0;

var keyHandler = function (event) {

	// If the key isn't in the pattern, or isn't the current key in the pattern, reset
	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
		current = 0;
		return;
	}

	// Update how much of the pattern is complete
	current++;

	// If complete, alert and reset
	if (pattern.length === current) {
		current = 0;
		window.location.replace("https://triflin.onrender.com/raggs.html")
	}

};

// Listen for keydown events
document.addEventListener('keydown', keyHandler, false);
