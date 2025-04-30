// Install uBlock Origin core via npm

const { StaticNetFilteringEngine } = require('@gorhill/ubo-core');

const blocklistText = `
||video-edge-*.ttvnw.net/v1/segment/*$media
||video-edge-d55370.ams02.abs.hls.ttvnw.net/v1/segment/*$media
||gql.twitch.tv/gql$xmlhttprequest,domain=twitch.tv,important
||countess.twitch.tv/countess/batch^$domain=twitch.tv,important
||imasdk.googleapis.com/js/sdkloader/ima3.js$domain=twitch.tv,important
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