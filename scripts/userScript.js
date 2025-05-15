// Install uBlock Origin core via npm

const { StaticNetFilteringEngine } = require('@gorhill/ubo-core');

const blocklistText = `
||edge.ads.twitch.tv^
`;

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