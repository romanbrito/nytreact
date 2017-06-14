var arr = [
  { id: 1,
  date: "something"},
  { id: -1,
  date: "something"},
  { id: 0,
  date: "something"},
];

console.log( arr.map((item) => item.id).join());