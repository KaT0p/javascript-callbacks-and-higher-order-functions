//Exercise #2: At Least Five Function
function atLeastFive(array, operation) {
  let num = 0;
  for (let i = 0; i < array.length; i++) {
    if (operation(array[i])) {
      num++;
    }
  }
  return num >= 5;
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

const isAboveSeventy = score => score > 70;

let scoreRoom1Result = atLeastFive(studentScoresRoom1, isAboveSeventy) ? 'ผ่านเกณฑ์ ✅' : 'ไม่ผ่านเกณฑ์ ❌';
let scoreRoom2Result = atLeastFive(studentScoresRoom2, isAboveSeventy) ? 'ผ่านเกณฑ์ ✅' : 'ไม่ผ่านเกณฑ์ ❌';
let scoreRoom3Result = atLeastFive(studentScoresRoom3, isAboveSeventy) ? 'ผ่านเกณฑ์ ✅' : 'ไม่ผ่านเกณฑ์ ❌';

console.log(`นักเรียนห้องที่ 1 ${scoreRoom1Result}`);
console.log(`นักเรียนห้องที่ 2 ${scoreRoom2Result}`);
console.log(`นักเรียนห้องที่ 3 ${scoreRoom3Result}`);