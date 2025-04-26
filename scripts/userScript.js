import { FiltersEngine } from '@ghostery/adblocker';
engine = await FiltersEngine.fromLists(fetch, [
 'https://easylist.to/easylist/easylist.txt'
]);