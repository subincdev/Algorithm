void main(){
  var nums = [2,2,1];
  int solution(Iterable<int> nums){
  var res = 0;
  for (var num in nums){
    res ^= num;
  }
  return res;
  }
  print(solution(nums));
}