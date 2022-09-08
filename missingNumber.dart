void main (
   int solution(List<int> arr) {
    var missing = arr.length;

  //XOR 연산자를 통해 인덱스와 원소가 다른 미싱 넘버를 찾아낸다.
  //만일 미싱넘버가 없다면 현재 원소 + 1인 missing 넘버가 나온다.  
    for(int i = 0; i < arr.length; i++){
      missing = missing^i^arr[i];
    }
    return missing;
}
)
