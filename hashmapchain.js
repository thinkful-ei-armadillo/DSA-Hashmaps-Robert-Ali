'use strict';
class _Node {
  constructor(value, next) {
    this.value=value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    if (!this.head) {
      this.head = new _Node(value, null);
    } 
    else {
      let temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = new _Node(value, null);
    }
  }

  find(value) {
    if (!this.head) {
      return;
    }
    let temp = this.head;
    while((temp.value.key !== value) && (temp.next !== null)) {
      temp = temp.next;  
    }
    return temp.value.value;
  }

  remove(val){
    if (this.head === null) {
      return null;
    }
    if (this.head.value === val){
      this.head = this.head.next;
    }
    let temp = this.head;
    let follower = this.head;
    while ((temp.value.key !== val) && (temp !== null)) {
      follower = temp;
      temp = temp.next;
    }
    follower.next = temp.next;
    return;
  }
}

class HashMapChain {
  constructor(initialCapacity = 8) {
    this.length = 0;
    this._hashTable = [];
    this._capacity = initialCapacity;
  }

  get(key) {
    const index = this._findSlot(key); 
    // if (this._hashTable[index] === undefined) {
    //   throw new Error('Key error');
    // }
    return this._hashTable[index].find(key);
  }

  set(key, value) {
    // const loadRatio = (this.length + this._deleted + 1) / this._capacity;
    // if (loadRatio > this.MAX_LOAD_RATIO) {
    //   this._resize(this._capacity * this.SIZE_RATIO);
    // }

    const index = this._findSlot(key);

    if (!this._hashTable[index]) {
      this._hashTable[index] = new LinkedList();
    }

    if (this._hashTable[index].find(key)){
      this._hashTable[index].remove(key);
    }



    this._hashTable[index].insert(key, value);
  }

  delete(key, value) {
    const index = this._findSlot(key);
    const slot = this._hashTable[index];
    if (slot === undefined) {
      throw new Error('Key error');
    }
    this.length--;
    slot.remove(value);
    // this._hashTable[index].next = 

    
  }

  _findSlot(key) {
    const hash = HashMapChain._hashString(key);
    const start = hash % this._capacity;
    return start;
  }

  // _resize(size) {
  //   const oldSlots = this._hashTable;
  //   this._capacity = size;
  //   this.length = 0;
  //   this._deleted = 0;
  //   this._hashTable = [];
  //   for (const slot of oldSlots) {
  //     if (slot !== undefined && !slot.DELETED) {
  //       this.set(slot.key, slot.value);
  //     }
  //   }
  // }

  static _hashString(string) {
    let hash = 5381;
    for (let i = 0; i < string.length; i++) {
      //Bitwise left shift with 5 0s - this would be similar to
      //hash*31, 31 being the decent prime number
      //but bit shifting is a faster way to do this
      //tradeoff is understandability
      hash = (hash << 5) + hash + string.charCodeAt(i);
      hash = hash & hash;
    }
    return hash >>> 0;
  }
}

module.exports = { HashMapChain };