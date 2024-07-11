// Consider an array/list of sheep where some sheep may be missing from their place. We need a function
// that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

// we are going to need a place to store the sheep count
// we will also need a for loop to iterate through the array
// going to use an if statement to add to the count, if its true add one to the camp
// return how maney sheep
function countSheep(sheep) {
  let totalSheep = 0;
  for (let i = 0; i < sheep.length; i++) {
    if (sheep[i] == true) {
      totalSheep++;
    }
  }
  return totalSheep;
}
