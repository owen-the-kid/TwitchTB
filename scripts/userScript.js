document.addEventListener('keydown', function(event) {
    if (event.key === 'Back') {
        // Emulate the ESC key
        var escEvent = new KeyboardEvent('keydown', {
            key: 'Escape',
            code: 'Escape',
            keyCode: 27, // Deprecated, but some old browsers might still require it
            which: 27, // Deprecated, but some old browsers might still require it
            bubbles: true,
            cancelable: true
        });
        document.dispatchEvent(escEvent);
    }
});

var script = document.createElement('script');
script.src = 'https://github.com/pixeltris/TwitchAdSolutions/raw/refs/heads/master/vaft/vaft.user.js';
script.type = 'text/javascript';
document.head.appendChild(script);

