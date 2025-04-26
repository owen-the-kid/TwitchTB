import { FiltersEngine } from '@ghostery/adblocker';
const engine = FiltersEngine.parse(fs.readFileSync('easylist.txt', 'utf-8'));
//Ghostery adblocker

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


