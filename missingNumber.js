function solution (arr) {
    //최대값
    const maxNum = Math.max(...arr);
    //합계
    const arrSum = arr.reduce((a,b)=>a+b,0);
    //만약 최대값부터 1까지의 합이 배열의 합계와 같다면
    if (maxNum*(maxNum+1)/2 == arrSum) {
        // 그 중에서 배열의 길이가 최대값이랑 같다면
        if (arr.length == maxNum ){
            //없는 애는 0
            return 0;
        // 배열의 길이가 최대값이랑 같지 않다면
        }else{ 
            //없는 애는 최대값 + 1 임
            return maxNum+1
        }
    // 최대값부터 1까지의 합이 배열의 합계와 같지 않다면
    } else {
    // 최대값부터 1까지의 합을 배열의 합계로 빼면 없는 애가 나오겠지..
        return maxNum*(maxNum+1)/2 - arrSum;
    }
}

function solution2(arr){

    //그나마 줄여본 코드 ㅠ
    const maxSum = (Math.max(...arr)*(Math.max(...arr)+1))/2;
    const arrSum = arr.reduce((a,b)=>a+b,0);
    if (!arr.includes(0)) {
        return 0;
    }
    return maxSum === arrSum ? Math.max(...arr)+1 : maxSum - arrSum ;
}
