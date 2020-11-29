/*
Question: Merge 2 Sorted lists and return the head of the resultant list
Assumptions:
  + All nodes in the list are unique
  + The items in the list are always numbers
*/


/*
Plan:
1. Given 2 lists l1, l2
1. Traverse through the smallest list (l1)
2. For every element in list l1 find the nearest element in l2 from l2's current head
  2.1 If no element found then move to next element in l1
  2.2 else if element found and same then move l2's head to next element and move to next element in l1
  2.3 else if element found and lower then add all elements between found element and l2's header before current l1 element and move l2 head
3. If l2 has remaining elements then add them to the tail of l1
 */
const merge = (list1, list2) => {
  let list2Head = 0;
  const result = [];

  const findNearest = (list, start, end, value) => {
    if (start > end || end < start) {
      return -1;
    }
    let prevPivot = -1;
    let pivot = start + Math.floor((end - start) / 2);
    const pivotValue = list[pivot];
    if (value < pivotValue) {
      prevPivot = findNearest(list, start, pivot - 1, value);
    } else if (value > pivotValue) {
      prevPivot = findNearest(list, pivot + 1, end, value);
    }

    if (prevPivot !== -1) {
      pivot = prevPivot;
    }

    return pivot;
  }

  for (let i = 0; i < list1.length; i++) {
    const list1Element = list1[i];
    let list2Index = findNearest(list2, list2Head, list2.length - 1, list1Element);
    if (list2Index !== -1) {
      const list2Element = list2[list2Index];
      if (list2Element > list1Element) {
        list2Index -= 1;
      }
      for (let j=list2Head; j <= list2Index; j++) {
        const elementToAdd = list2[j];
        if (elementToAdd !== list1Element) {
          result.push(list2[j]);
        }
      }
      list2Head = list2Index + 1;
    }
    result.push(list1Element);
  }

  if (list2Head < list2.length) {
    for (let i=list2Head; i<list2.length; i++) {
      result.push(list2[i]);
    }
  }

  return result;
}

module.exports = (l1, l2) => {
  let list1;
  let list2;

  if (l1.length < l2.length) {
    list1 = l1;
    list2 = l2;
  } else {
    list1 = l2;
    list2 = l1;
  }

  return merge(list1, list2);
};

