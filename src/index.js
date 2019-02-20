/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let trinagles = spichonee1 = spichonee2 = spichonee3 = 0;
  for (i = 0; i < preferences.length; i++) {
    spichonee1 = preferences[i];
    spichonee2 = preferences[spichonee1-1];
    spichonee3 = preferences[spichonee2-1];
    if(spichonee3 == i+1) trinagles++;
  }
  trinagles = Math.floor(trinagles/3);
  return trinagles;
};
