import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import { apiKey as key, url, sayHi, old, dog, apiKey } from './src/config';

import User, { createURL, gravatar } from './src/user';

const wes = new User('Wes Bos', 'wesbos@gmail.com', 'wesbos.com');
const profile = createURL(wes.name);
const image = gravatar(wes.email);
console.log('image', image);


const ages = [1, 2, 3, 4, 5, 5, 7, 7, 8, 9,9,9,9,9, 9];
const uniqueAges = uniq(ages);
console.log('ages', uniqueAges);

console.log('other', insane, jsonp, uniq, apiKey);
