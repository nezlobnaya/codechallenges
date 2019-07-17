  // To celebrate Independence Day, we're hosting a BBQ. Create a function called julyBbq that will take two arrays: the first consisting of items, the second consisting of the price of each item at the respective index. It should return out an object with the names of the items as its keys and the cost as its values.


// ADD CODE HERE
// function julyBbq (items, prices) {
//     for(let y = 0; y < prices.length; y++) {
//         thing = {};
//         for (let i = 0; i < items.length; i++) {
//             thing[items[i]] = prices[i];
//             };
//     }
//     return thing;
// }
   
// function julyBbq(arr,list){
// 	let obj = {};
//     let items = arr.map((item,i) => obj[item] = prices[i]);
//     return obj
// }   

function julyBbq(arr,list){
	const obj = {};
    arr.map((item,i) => obj[item] = list[i]); //also can bes used with `forEach` method but `map` is faster
    return obj
}


// UNCOMMENT THESE TO TEST YOUR WORK!
const items = ['ribs', 'charcoal', 'watermelon', 'hotdogs'];
const prices = [19, 4, 2, 6];
const bbqShoppingList = julyBbq(items, prices);
console.log(bbqShoppingList.watermelon); // should log 2
console.log(bbqShoppingList);
