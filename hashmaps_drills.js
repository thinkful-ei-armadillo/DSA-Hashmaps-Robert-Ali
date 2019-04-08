"use strict";

const { HashMapChain } = require("./hashmapchain");

function main() {
  const lotr = new HashMapChain();
  lotr.set("maiar", "the necromancer");
  console.log(lotr._hashTable);
  lotr.delete('maiar');
  console.log(lotr._hashTable);

  // console.log(lotr.get('hobbit'));
  // console.log(lotr.get('maiar'));
  //logging out maiar prints sauron, and hobbit prints frodo
  //this happens because subsequent setting a value to a prexisting key will overwrite the previous value

  //our capacity is 24 because we reached the max capacity and resized based on capacity and resize ratio (8 * 3)
}

main();

const WhatDoesThisDo = function() {
  let str1 = "Hello World.";
  let str2 = "Hello World.";
  let map1 = new HashMap();
  map1.set(str1, 10);
  map1.set(str2, 20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3, 20);
  map2.set(str4, 10);

  // console.log(map1.get(str1));
  // console.log(map2.get(str3));
};

//^ will log out 20 first and then 10. because you are still calling map1.get('Hello World.') which will be overwritten because HashMap is a pure fucntion

const removeDupes = function(string) {
  let noDupes = "";
  let hm = new HashMap();
  for (let i = 0; i < string.length; i++) {
    try {
      hm.get(string.charAt(i));
    } catch {
      hm.set(string.charAt(i));
      noDupes += string.charAt(i);
    }
  }
  return noDupes;
};

// console.log(removeDupes("google"));

const palindromeCheck = function(string) {
  let hm = new HashMap();
  let dupeCount = 0;
  for (let i = 0; i < string.length; i++) {
    try {
      hm.get(string.charAt(i));
      dupeCount++;
    } catch {
      hm.set(string.charAt(i), "");
    }
  }
  if (dupeCount === Math.floor(string.length / 2)) {
    return true;
  } else {
    return false;
  }
};

// console.log(palindromeCheck("acecarr"));
// console.log(palindromeCheck("north"));
const sort = function(word) {
  return word
    .split("")
    .sort()
    .join("");
};

const anagramGrouping = function(stringArr) {
  let firstHash = new Map();
  for (let i = 0; i < stringArr.length; i++) {
    let key = sort(stringArr[i]);
    let group = firstHash.get(key) || [];
    firstHash.set(key, [...group, stringArr[i]]);
  }
  return Array.from(firstHash.values());
};

// console.log(
//   anagramGrouping(["east", "cars", "acre", "arcs", "teas", "eats", "race"])
// );
