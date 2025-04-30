import { FiltersEngine } from '@ghostery/adblocker';
const engine = FiltersEngine.parse(fs.readFileSync('easylist.txt', 'utf-8'));

//code above blocks ads and is powered by ghostery
// ESC Key emualtion for back button
document.addEventListener('back', (event) => {
  if (event.key === 'Escape') {
    window.history.back();
  }
});

