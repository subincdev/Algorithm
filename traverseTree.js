// 테스트 케이스 1 
//let t = {
//     "value": 1,
//     "left": {
//         "value": 2,
//         "left": null,
//         "right": {
//             "value": 3,
//             "left": null,
//             "right": null
//         }
//     },
//     "right": {
//         "value": 4,
//         "left": {
//             "value": 5,
//             "left": null,
//             "right": null
//         },
//         "right": null
//     }
// }

// 테스트 케이스 2
let t = {
    "value": 2,
    "left": {
        "value": 1,
        "left": null,
        "right": {
            "value": 0,
            "left": null,
            "right": null
        }
    },
    "right": null
}


//이건 어떻게 사용할 수 있을까,,?

function Tree(x) {
  this.value = x;
  this.left = null;
  this.right = null;
}

//나중에 배열말고 진짜 큐를 구현해서 풀어보고싶다!
class Queue{
    constructor() {
        this._arr = [];
    }
    enqueue(item) {
        this._arr.push(item);
    }
    dequeue(){
        return this._arr.shift();
    }
}


function solution(t){
    //visitiedNode는 방문한 노드 value만 들어감.
    const visitedNode = [];
    //needToVistiedNode는 left, right의 정보를 알아야하기 때문에 객체 상태로 넣어줌.
    //needToVisitiedNode는 방문 예정인 노드들, 객체 상태로 value, left, right있는 상태로 순서대로 들어감.
    //needToVisitiedNode._arr[0] = {"value":1, "left":{"value":2} ... }
    const needToVisitedNode = new Queue();

    //우선 객체 전체를 방문 예정인 노드에 넣어준다
    needToVisitedNode.enqueue(t);

    //방문 예정인 노드들이 다 없어질때까지 반복해주기
    while(needToVisitedNode._arr.length){
        //left가 있다면
        if (needToVisitedNode._arr[0].left){
            //방문예정에 left 노드 넣어주기
            needToVisitedNode.enqueue(needToVisitedNode._arr[0].left)
        }
        
        //right가 있다면 
        if (needToVisitedNode._arr[0].right){
            //방문한 노드에 right 노드 넣어주기
            needToVisitedNode.enqueue(needToVisitedNode._arr[0].right);
        }

        //방문한 노드에 큐의 첫번째 원소 넣어주기
        visitedNode.push(needToVisitedNode.dequeue().value)
    }
    return visitedNode;
}

console.log(solution(t));