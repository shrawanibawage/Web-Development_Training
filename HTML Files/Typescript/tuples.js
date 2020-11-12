var mixed = ['hello', 10, 90.5];
var mix_tuple = [];
mix_tuple[0] = 120;
mix_tuple[1] = 'Kumaran';
console.log(mix_tuple[0]);
mix_tuple[3] = 'hi';
console.log(mix_tuple.length);
//destructuring tuples
var mix_nums = [10, 'hello'];
var x = mix_nums[0], y = mix_nums[1];
var y = mix_nums[0], x = mix_nums[1], z = mix_nums[2];
var p = mix_nums[0];
console.log(x);
console.log(y);
console.log(z); //undefined
console.log(p);
