/**
 * Window Size Bookmarklet (unminified) 0.2.3 by @josscrowcroft
 * http://www.josscrowcroft.com/2011/code/window-size-bookmarklet/
 * 
 * No warranty - but FWIW, I'm pretty sure it won't break the internet.
 * 
 * No license - backlinks and improvement suggestions very welcome!
 */

// Create new div and text for style attribute, create function for window resize:
(function() {
    
    var d = document,
        w = window,
        j = d.createElement('div'),
        span = d.createElement('span'),
        s = 'position:fixed;top:0;left:0;color:#fff;background:#222;padding:5px 1em;font:14px sans-serif;z-index:999999',
        labelStyle = 'display: inline-block;padding: 0 5px;',
        showEm = false,
        defaultFontSize = Number(getComputedStyle(document.documentElement,null).fontSize.replace(/[^\d]/g, '')),
        changeMeasurement = function () {
            showEm = !showEm;
            r();
        },
        /* Utility functions */
        bindEvent = function (el, eventType, callback) {
            // Bind event:
            var onEvent = 'on' + eventType;
            if ( el.addEventListener )
                el.addEventListener(eventType, callback, false);
            else if ( el.attachEvent )
                el.attachEvent(onEvent, callback);
            else
                el[onEvent] = callback;
        },
        addStyle = function (el, style) {
            // Add style attribute to div:
            if( typeof el.style.cssText !== 'undefined' )
                el.style.cssText = style;
            else
                el.setAttribute('style', style);
        },
        renderMeasurements = function (width, height) {
            return setValue(width) + ' x ' + setValue(height);
        },
        setValue = function (value) {
            return showEm ? (value / defaultFontSize) : value;
        },
        createRadioLabel = function (label) {

            var l = d.createElement('label');
            l.for = label;

            // Set label's content:
            if ( w.innerWidth === undefined )
                // IE 6-8:
                l.innerText = label;
            else if ( d.all )
                // Others:
                l.innerText = label;
            else
                // Firefox:
                l.textContent = label;


            addStyle(l,labelStyle);
            j.appendChild(l);
        },
        createRadioInput = function (label, isSelected) {

            var i = d.createElement('input');
            i.type = 'radio';
            i.name = label;
            isSelected && (i.checked = true);
            
            // Bind input change event:
            bindEvent(i, 'change', changeMeasurement);

            j.appendChild(i);
        },
        r = function() {
            // Set div's content:
            if ( w.innerWidth === undefined )
                // IE 6-8:
                span.innerText = renderMeasurements(d.documentElement.clientWidth, d.documentElement.clientHeight);
            else if ( d.all )
                // Others:
                span.innerText = renderMeasurements(w.innerWidth, w.innerHeight);
            else
                // Firefox:
                span.textContent = renderMeasurements(window.innerWidth, window.innerHeight);
        };

    j.appendChild(span);

    //Create px and em radio buttons
    createRadioLabel ('px');
    createRadioInput ('px', true);
    createRadioLabel ('em');
    createRadioInput ('px');
    
    // Append new div to body element:
    d.body.appendChild( j );
    
    addStyle(j,s);

    // Set div's content:
    r();
    
    /*if ( w.addEventListener )
        w.addEventListener('resize', r, false);
    else if ( w.attachEvent )
        w.attachEvent('onresize', r);
    else
        w.onresize = r;*/

    // Bind window resize event:
    bindEvent(w, 'resize', r);
    
})();