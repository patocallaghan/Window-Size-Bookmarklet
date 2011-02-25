/**
 * Window Size Bookmarklet by @josscrowcroft
 * http://www.josscrowcroft.com/2011/code/window-size-bookmarklet/
 * Code on Github: http://github.com/josscrowcroft/Window-Size-Bookmarklet
 * 
 * No warranty - but FWIW, I'm pretty sure it won't break the internet.
 * 
 * No license - backlinks and improvement suggestions very welcome!
 */

// Init function:
function ws() {
	var $ = jQuery,
		w = $(window);
	
	// Create WindowSize display div:
	$('<div id=\"wsd\" style=\"position:fixed;top:0;left:0;height:20px;width:80px;color:#fff;background:rgba(0,0,0,.7);padding:5px;font:14px sans-serif;z-index:999999\"/>').appendTo('body').html(w.width() + 'x' + w.height());
	
	// Bind window resize function:
	w.resize(function() {
		$('#wsd').html(w.width() + 'x' + w.height());
	});
}

// Do it, do it now:
(function(d){
	// Check jQuery not already loaded and load it, then fire up init function:
	if (typeof jQuery == 'undefined') {
		var s = d.createElement('script');
		s.type = 'text/javascript';
		s.onload = ws;
		s.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
		d.getElementsByTagName('head')[0].appendChild(s);
	} else
		ws();
})(document);