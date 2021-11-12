"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupBy = void 0;
/*
1. The first line is importing the groupBy function from lodash.
2. The second line is defining a function that takes a list of items and a key function.
3. The third line is using the groupBy function to group the items by the key function.
4. The fourth line is exporting the groupBy function.
*/
/*
Groups an array of objects by a property name.

Args:
  list: The list of items to group.
  getKey: (item: T) => K
Returns:
  A dictionary of arrays.
*/
const groupBy = (list, getKey) => list.reduce((previous, currentItem) => {
    const group = getKey(currentItem);
    if (!previous[group])
        previous[group] = [];
    previous[group].push(currentItem);
    return previous;
}, {});
exports.groupBy = groupBy;
