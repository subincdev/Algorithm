void main(){
  final s = "CodesignalIsAwesome";
  String solution(String s) {
    //Iterable collection이 따로 존재
   final Iterable<String> charList = s.split("").map((char) =>
   // ===은 dart에서 ==
    char == char.toUpperCase() ? " " + char : char
  );
  return charList.join("").trim().toLowerCase();
}
print(solution(s));
}


