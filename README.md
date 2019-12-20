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


# Multi-bracket Validation
Your function should take a string as its only argument, and should return a boolean representing whether or not the brackets in the string are balanced. There are 3 types of brackets:

Round Brackets : ()
Square Brackets : []
Curly Brackets : {}

## Challenge
New idea but we could use the stack system we have been learning throughout the week.

## Approach & Efficiency
-Create a stack and a map object at the beginning of the function.
-Loop through the string.
-If character is an opening bracket push it to the stack.
-If character is closing bracket pop it from stack.
-If last popped element from stack doesn't match closing bracket return false, else return true.

## Solution
Created a variable named stack that starts as an empty array, and then an object with the opening / closing brackets. For looped through the string and if the index reaches an opening bracket it pushes it to the stack. If the loop gets to the end of the stack without matching it returns false. If the loop ends and the stack is not empty return false. If all of those pass, return true. I did notice this method will only work when there are only paranthese in the string, there can't be and numbers or strings within the bracket.