// Given a singly linked list of integers, determine whether or not it's a palindrome.

// Example

// For l = [0, 1, 0], the output should be
// isListPalindrome(l) = true;
// For l = [1, 2, 2, 3], the output should be
// isListPalindrome(l) = false.
// Input/Output

// [time limit] 4000ms (py3)
// [input] linkedlist.integer l

// A singly linked list of integers.

// Guaranteed constraints:
// 0 ≤ list size ≤ 5 · 10^5,
// -10^9 ≤ element value ≤ 10^9.

// [output] boolean

// Return true if l is a palindrome, otherwise return false.

// //냅다 구현한 식
// //연결이 아니라 
// function isListPalindrome(l){
//     //l의 원소가 0,1개면 무조건 palindrome
//     if (l.length < 2) return true;
//     //l의 길이가 1이될때까지 pop과 shift의 값을 비교해서 false;
//     while (l.length > 1){
//         const popped = l.pop();
//         const shifted = l.shift();
//         console.log(popped, shifted);
//         if (popped !==shifted) return false;
//     }
//     //모든 조건을 만족하면 true;
//     return true;
// }

// function isListPalindrome(l){

// }

// const l = [1, 2, 3, 1, 2, 3];

// console.log(isListPalindrome(l));

