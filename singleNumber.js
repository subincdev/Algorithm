function solution(nums) {
  "use strict";
  let res = 0;
  for (let num of nums) {
    //배열에서 중복되지 않는 하나의 수를 찾는 문제
    // nums.includes(num, nums.indexOf(num) + 1) ? null : (res = num);

    //XOR은 숫자를 2진수로 변환해 각 숫자가 같으면 0, 다르면 1로 나타내어지는 연산자
    //같은 숫자를 비트 연산자로 계산하면 0이 된다
    //결국 마지막에는 중복되지 않은 값 하나만 나와서 답을 구하게 된다.
    res ^= num;
  }
  return res;
}

console.log(solution([2, 2, 1]));
