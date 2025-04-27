import { FiltersEngine } from '@ghostery/adblocker';
engine = await FiltersEngine.fromPrebuiltAdsAndTracking(fetch);
//code above blocks ads and is powered by ghostery
// ESC Key emualtion for back button
document.addEventListener('back', (event) => {
  if (event.key === 'Escape') {
    window.history.back();
  }
});

