
// function getShippingMessage(country, price, deliveryFee) {
    
//     const totalPrice = price + deliveryFee;

//     return `Shipping to ${country} will cost ${totalPrice} credits`;
// }


// console.log(getShippingMessage("Australia", 120, 50));
// console.log(getShippingMessage("Germany", 80, 20));
// console.log(getShippingMessage("Sweden", 100, 20));

// -----------------------------------------------------------

// function formatMessage(message, maxLength) {
//     if (message.length <= maxLength) {
//         return message;
//     } else {
//         return message.slice(0, maxLength) + "...";
//     }
// }


// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

// ------------------------------------------------------------------------------------------------------------------------------------------

// // !HOMEWORK 3

// function makeArray (firstArray, secondArray, maxLength) {
    
// let thirdArray = [];

// for (let i = 0; i < firstArray.length; i+=1) {
//     thirdArray.push(firstArray[i]);
// }

// for (let i = 0; i < secondArray.length; i+=1) {
//     thirdArray.push(secondArray[i]);
// }

// if (thirdArray.length > maxLength) {
//     thirdArray = thirdArray.slice(0, maxLength);
// }
//     return thirdArray;
// }


// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

// -----------------------------------------------------------------------------------------------------------------------------------------
    
// // !HOMEWORK 4

// function calcAverageCalories(days) {
//   let totalCalories = 0;
//   for (const day of days) {
//     totalCalories += day.calories;
//   }
//   if (days.length === 0) return 0;
//   return totalCalories / days.length;
// }

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 }
//   ])
// ); // 3180

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 2040 },
//     { day: "tuesday", calories: 2270 },
//     { day: "wednesday", calories: 2420 },
//     { day: "thursday", calories: 1900 },
//     { day: "friday", calories: 2370 },
//     { day: "saturday", calories: 2280 },
//     { day: "sunday", calories: 2610 }
//   ])
// ); // 2270

// console.log(
//   calcAverageCalories([])
// ); // 0

// // !HOMEWORK 5

// const getUsersWithFriend = (users, friendName) =>
// 	users.filter((user) => user.friends.includes(friendName));

// const allUsers = [
// 	{
// 		name: "Moore Hensley",
// 		friends: ["Sharron Pace"],
// 	},
// 	{
// 		name: "Sharlene Bush",
// 		friends: ["Briana Decker", "Sharron Pace"],
// 	},
// 	{
// 		name: "Ross Vazquez",
// 		friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// 	},
// 	{
// 		name: "Elma Head",
// 		friends: ["Goldie Gentry", "Aisha Tran"],
// 	},
// 	{
// 		name: "Carey Barr",
// 		friends: ["Jordan Sampson", "Eddie Strong"],
// 	},
// 	{
// 		name: "Blackburn Dotson",
// 		friends: ["Jacklyn Lucas", "Linda Chapman"],
// 	},
// 	{
// 		name: "Sheree Anthony",
// 		friends: ["Goldie Gentry", "Briana Decker"],
// 	},
// ];

// console.log(getUsersWithFriend(allUsers, "Briana Decker"));
// // [
// //   {
// //     name: "Sharlene Bush",
// //     friends: ["Briana Decker", "Sharron Pace"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// // [
// //   {
// //     name: "Elma Head",
// //     friends: ["Goldie Gentry", "Aisha Tran"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Adrian Cross")); // []

// --------------------------------------------------------------------------------------------------

//!HOMEWORK 6

class Storage {
  #items;

  constructor(initialItems) {
    this.#items = initialItems;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.#items = this.#items.filter(item => item !== itemToRemove);
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]