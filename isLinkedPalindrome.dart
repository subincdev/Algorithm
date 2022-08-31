class ListNode<T> {
  T value;
  ListNode<T>? next;

  ListNode(T value)
      : value = value,
        next = null;
}

bool solution(ListNode<int>? startNode) {
  //solution함수 매개변수 node로 들어감
  var node = startNode;
  //count = 0
  var count = 0;

  //node가 null이 될때까지
  while (node != null) {
    //node에 현재 node의 다음 노드를 넣어주고
    node = node.next;
    //카운트 증가시키기
    ++count;
  }
  //이 while문을 통해 node는 node 다음 노드로 이동했음.

  node = startNode?.next;
  ListNode<int>? prevNode;
  final half = count ~/ 2;

  for (int i = 1; i < count; ++i) {
    if (i < half) {
      node = node?.next;
    } else {
      final tempNode = node?.next;
      node?.next = half < i ? prevNode : null;
      prevNode = node;
      node = tempNode;
    }
  }

  var backwardNode = prevNode;
  node = startNode;
  while (backwardNode != null) {
    if (node?.value != backwardNode.value) {
      return false;
    }
    node = node?.next;
    backwardNode = backwardNode.next;
  }
  return true;
}
