// var name = "윤석렬";
// var age = 60;
// var strings = '대통령' + name + "은 나이가" + age + "쨜~!"
// console.log(strings);
// strings = `
//     대통령 ${name}은 
//     나이가 ${age}살 입니다.
// `
// console.log(strings);

// a=10;
// b="10";

// if(a===b){
//     console.log('haha');
// }

// 배열 

// var arr = []; // 배열 리터럴
var arr = new Array(10); // 10개의 공간을 가지는 배열
var arr = new Array(10, 20); // 10과 20을 값으로 가지는 2칸의 배열
// 자료형이 정해져 있지 않다는 점이 자바와의 가장 큰 차이점이라고 할 수 있음.
arr[0] = 10;
arr[1] = 'abcd';
arr[2] = true;
arr[3] = undefined;
arr[4] = [1, 2, 3, 4];
arr[5] = {x:10, y:20};
console.log(arr[5].y);
console.log(arr[4][2]);