s = "CodesignalIsAwesome";

function solution(string) {
  const charArray = [...string].map((char) =>
    char === char.toUpperCase() ? " " + char : char
  );
  return charArray.join("").trim().toLowerCase();
}

//심플한 솔루션
// solution = s => s
//     .replace(/(.)(?=[A-Z])/g, '$1 ')
// 대문자 앞 한글자를 자르고, 잘라낸 글자를 공백앞에 붙여 반환한다.
//     .toLowerCase()

console.log(solution(s));
