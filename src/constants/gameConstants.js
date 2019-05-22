const Hashmap = new Map([
  [1, [2, 4]],
  [2, [1, 3, 5]],
  [3, [2, 6]],
  [4, [1, 5]],
  [5, [2, 4, 6]],
  [6, [3, 5]]
]);
const LeftHashmap = new Map([[1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 0]]);
const RightHashmap = new Map([[1, 0], [2, 1], [3, 2], [4, 0], [5, 4], [6, 5]]);
const UpHashmap = new Map([[1, 4], [2, 5], [3, 6], [4, 0], [5, 0], [6, 0]]);
const DownHashmap = new Map([[1, 0], [2, 0], [3, 0], [4, 1], [5, 2], [6, 3]]);
const FinalBlockSeq = [1, 2, 3, 4, 5, 6];
export {
  Hashmap,
  LeftHashmap,
  RightHashmap,
  UpHashmap,
  DownHashmap,
  FinalBlockSeq
};
