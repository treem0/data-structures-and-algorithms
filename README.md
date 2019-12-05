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

# Shift an Array
Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

## Challenge Description
We cannot use built in array methods to do this.

## Approach & Efficiency
-Take in an array and a value.
-Create a new empty array.
-Create a variable that is the middle of the array.
-Loop through the array and create if statements regarding the position you are at on the array.
-Add in the value ad the middle of array.

## Solution
Created a new array and a variable that find the middle of the array with Math.ceil and dvidides the arrays length by 2. Loop through the array with a for loop. Created logic so the first half of the array gets looped into the new array. When the loop hits the middle of the array it adds a value at that index. And then it loops through the rest shifting each index by -1. 