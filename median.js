function findMedianSortedArrays(nums1, nums2) {
  const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
  const middle = Math.floor(mergedArray.length / 2);
  if (mergedArray.length % 2 === 0) {
    const a = mergedArray[middle - 1] + mergedArray[middle];
    return a / 2;
  }
  return mergedArray[middle];
}
console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
