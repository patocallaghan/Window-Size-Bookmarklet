/**
 * Window Size Bookmarklet (unminified) 0.2 by @josscrowcroft
 * http://www.josscrowcroft.com/2011/code/window-size-bookmarklet/
 * 
 * No warranty - but FWIW, I'm pretty sure it won't break the internet.
 * 
 * No license - backlinks and improvement suggestions very welcome!
 */

// Create new div and text for style attribute, create function for window resize:
var d = document.createElement('div'),
	s = 'position:fixed;top:0;left:0;height:20px;width:80px;color:#fff;background:rgba(0,0,0,.7);padding:5px;font:14px sans-serif;z-index:999999',
	w = window,
	u = function() {
		d.innerText = w.innerWidth + 'x' + w.innerHeight;
	};

// Set div's content:
d.innerText = w.innerWidth + 'x' + w.innerHeight;

// Append new div to body element:
document.body.appendChild( d );
	
// Add style attribute to div:
if( typeof d.style.cssText !== 'undefined' )
	d.style.cssText = s;
else
	d.setAttribute('style', s);

// Bind window resize event:
w.addEventListener('resize', u, false);