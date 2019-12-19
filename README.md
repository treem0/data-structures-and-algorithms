## Table of Contents

   # Reverse an Array
Write a function that takes in an array and reverses it withouth using the reverse method.

## Challenge
We are not allowed to use the array method that reverses arrays for us.

## Approach & Efficiency
-I need to take in an array.
-Create a new array with the spread operation.
-For loop through the original array and give take change the index by -1, esentially reversing the order.
-Return the mutated array that is now reversed.

## Solution
Created an new array with the the spread operation of the old array. Then looped through the array giving each item a negative index to reverse the order.

  # PseudoQueue
Create a brand new PseudoQueue class. Do not use an existing Queue. Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below), but will internally only utilize 2 Stack objects.

## Challenge
This is a brand new concept.

## Approach & Efficiency
-Use the method enqueue to take in a value and inserts it into the PseudoQueue, using a first-in, first-out approach.
-Use the method dequeue to extract a value from the PseudoQueue using first-in, first-out approach.

## Solution
Created the PseudoQueue class with the methods it requires.
