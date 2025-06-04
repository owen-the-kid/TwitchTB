// Install uBlock Origin core via npm

const { StaticNetFilteringEngine } = require('@gorhill/ubo-core');

const userResourcesLocation = 'https://raw.githubusercontent.com/pixeltris/TwitchAdSolutions/0b5ea5ed8959a6b4eb4c1ea406aaa56313c9c907/vaft/vaft-ublock-origin.js';
const response = await fetch(userResourcesLocation);
const blocklistText = await response.text();

const snfe = await StaticNetFilteringEngine.create();
await snfe.useLists([ { raw: blocklistText } ]);

// Apply the filter list as needed in your application

// ESC Key emualtion for back button
document.addEventListener('back', (event) => {
  if (event.key === 'Escape') {
    window.history.back();
  }
});

//BetterTTV emotes
import BetterTTV from "betterttv";

BetterTTV.getGlobalEmotes()
    .then(console.log);
// Returns Emote[],