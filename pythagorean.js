var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(coord) {
  var x2 = Math.pow(coord.x, 2);
  var y2 = Math.pow(coord.y, 2);
  return Math.sqrt(x2 + y2);
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);