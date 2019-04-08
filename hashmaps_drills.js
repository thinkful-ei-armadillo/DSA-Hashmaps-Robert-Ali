'use strict';

const {HashMap} = require('./hashmap');


function main() {
  const lotr = new HashMap();
  lotr.set('hobbit','bilbo');
  lotr.set('hobbit', 'frodo');
  lotr.set('wizard', 'gandalf');
  lotr.set('human', 'aragon');
  lotr.set('elf', 'legolas');
  lotr.set('maiar', 'the necromancer');
  lotr.set('maiar', 'sauron');
  lotr.set('ringbearer', 'gollum');
  lotr.set('ladyoflight', 'galadriel');
  lotr.set('halfelven', 'arwen');
  lotr.set('ent', 'treebeard');
  //console.log(lotr);
  // console.log(lotr.get('hobbit'));
  // console.log(lotr.get('maiar'));
  //logging out maiar prints sauron, and hobbit prints frodo
  //this happens because subsequent setting a value to a prexisting key will overwrite the previous value

  //our capacity is 24 because we reached the max capacity and resized based on capacity and resize ratio (8 * 3)

}


main();

const WhatDoesThisDo = function () {
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1, 10);
  map1.set(str2, 20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3, 20);
  map2.set(str4, 10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
};

//^ will log out 20 first and then 10. because you are still calling map1.get('Hello World.') which will be overwritten because HashMap is a pure fucntion
