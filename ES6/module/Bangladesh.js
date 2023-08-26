/** 
 * ? Differences between Named module and Default module
 * * Named module=> kono file theke j naam a export kora hobe onno file a same name ei import korte hobe
 * * Default module=> kono file theke j naam a export kora hobe onno file a j kono name diye import korte parbe
 */


import { laptop, mobile, car } from './China.js'; // Named module
import { Germany } from './Germany.js'; // Named module

import NewModule from './Australia.js'; // Default module

console.log(laptop);
mobile();
car();

let obj = new Germany();
obj.Toys();

let newObj = new NewModule("Al Emam");