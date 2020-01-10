import str from './models/Search';
console.log(str);

// import {add as a, multiply as m, ID} from './views/searchView';
import * as searchView from './views/searchView';
// console.log(`If you add 2 to ${ID} you get ${a(ID, 2)}`);
// console.log(`If you multiply 2 with ${ID} you get ${m(ID, 2)}`);
console.log(`If you add 2 to ${searchView.ID} you get ${searchView.add(searchView.ID, 2)}`);
