
// function solution(nums,k){
//     1. bubble sort = time limit이 생김
//     function bubbleSort(arr){
//     for (let i = 0; i<arr.length; i++){
//         let temp;
//         for (let j=0; j<arr.length-1-i; j++){
//             if (arr[j]<arr[j+1]){
//                 temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//         if (!temp){
//             break;
//         }
//     }
//     return arr;
// }
//     return bubbleSort(nums)[k-1]
// }

// function solution(nums,k){
//     2. 삽입 정렬 알고리즘 == 버블정렬이랑 똑같은 시간 복잡도로 통과 안됨.
//     function insertionSort (arr){
//         for (let i=1; i<arr.length; i++){
//             let cur = arr[i];
//             let left = i - 1;

//             while(left>= 0 && arr[left] < cur){
//                 arr[left+1] = arr[left];
//                 arr[left] = cur;
//                 cur = arr[left];
//                 //left가 0이 될때가지
//                 left --;
//             }
//         }
//         return arr;
//     }

//     return insertionSort(nums)[k-1]
// }

// 힙 정렬로 풀기

//swap 함수
function swap(arr, firstIdx, secondIdx){
    let temp = arr[firstIdx];
    arr[firstIdx] = arr[secondIdx];
    arr[secondIdx] = temp;
}

//최대힙 정렬
function upHeapify(arr, num, i) {
    //부모 노드 인덱스를 세번째 인자값으로 초기화
    let largest = i;
    //왼쪽 노드
    let left = 2*largest + 1;
    //오른쪽 노드
    let right = 2*largest + 2;

    //만약에 left가 넘겨받은 두번째 인자값보다 작으면서 부모 노드보다 크면
    if (left < num && arr[left] > arr[largest] ){
        //부모노드엔 left 노드를
        largest = left;
    }

    //만약에 right가 넘겨받은 두번째 인자값보다 작으면서 부모 노드보다 크면
    if (right < num && arr[right] > arr[largest]){
        //부모노드엔 right 노드를
        largest = right;
    }

    //만약 부모노드가 초기값 인덱스와 다르면
    if (largest != i){
        //초기값와 largest 값 바꾸기
        swap(arr, i, largest);
        upHeapify(arr, num, largest);
    }
}

function solution(nums, k){
    // 배열 길이 활용
    const arrLen = nums.length;
    // 마지막 부모 노드부터 훑기
    for (let i = parseInt(arrLen/2)-1; i>=0; i--){
        // upHeapify 함수에 배열, 배열 길이, i 넘기기
        upHeapify(nums,arrLen, i );
    }

    // 배열의 마지막 요소부터 첫번째 요소까지
    for (let i = arrLen-1; i>0; i--){
        //0번째 요소랑 i번째 요소 바꾸기
        swap(nums, 0, i);
        //upHeapify 함수에 배열, 인덱스, 0 넘기기
        upHeapify(nums, i, 0);
    }

    return nums[arrLen-k];
}
