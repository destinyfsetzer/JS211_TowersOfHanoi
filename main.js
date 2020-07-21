'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// An object that represents the three stacks of Towers of Hanoi; 
  // * each key is an array of Numbers: 
    // * A is the far-left, 
    // * B is the middle, 
    // * C is the far-right stack
      // * Each number represents the largest to smallest tokens: 
        // * 4 is the largest, 
        // * 1 is the smallest

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

// Start here. What is this function doing?
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// let startStack = first entered stack 
// let endStack = second entered stack 
// Next, what do you think this function should do?
const movePiece = (startStack, endStack) => {
  // Your code here
  stacks[endStack].push(stacks[startStack].pop())
  }
  // // <!--move last stones in 'stack' to a new stack-->
  // // putting last stone in a stack into a bucket (var)
  // // <!--lastChild = stack.lastElementChild()-->
  // let stone = null
  // // let startStack = document.getElementById()
  // if(stone) {  //if stone is truthy or falsey
  // endStack.appendChild(stone)
  // stone = null
  // } else {
  // let lastChild = startStack.lastElementChild
  // stone = startStack.removeChild(lastChild)
  // }



// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = (start, end) => {
  if (stacks[end].length === 0 || stacks[start][stacks[start].length - 1] < stacks[end][stacks[end].length -1]) {
    return true;
  } else {
    console.log("straight to jail");
    return false
  }
}
  // <!--not allow larger stones on top of smaller stones-->
  // <!--stone 4 cannot go on stone 3-->


// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {
  
// <!--when all stones have been moved to a new stack that wasn't the starting stack-->
// <!--check for win-->
// <!--when stack B or C = [4, 3, 2, 1]-->

}

// When is this function called? What should it do with its argument?
const towersOfHanoi = (startStack, endStack) => {
  // Your code here
  // stack.appendChild(stone)
  // callback in order movePiece 
  movePiece(startStack, endStack)
  // isLegal
  // checkForWin
  // else towersOfHanoi
}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
