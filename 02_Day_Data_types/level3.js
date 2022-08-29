let sentence =
  'Love is the best thinng in this world. Some found their love and some are still looking for their love';
res = /love/gi;
console.log(sentence.match(res));
let str =
  'You cannot end a sentence with because because because is a conjunction';
let str1 = /because/gi;
console.log(str.match(str1));

const sentence2 =
  "    const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'";

let a = /[^a-zA-Z0-9 ]/g;
console.log(sentence2.replace(a, ''));

let b =
  'He earns 5000 euros from salary per month,10000 euros annual bonus,15000 euro online courses per month ';
let c = /\d+/g;
d = b.match(c);
console.log(d);

// let s = [1, 2, 3],
//   ans = 0;
// for (let i = 0; i < s.length; i++) {
//   ans = ans + s[i];
// }
// console.log(ans);
