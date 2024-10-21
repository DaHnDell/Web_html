var arr = ["a", true, 1234];
console.log(arr.length)

var arr2 = new Array(10);
console.log(arr2);
console.log(arr2[0]);

// slice, ( cf : substring)

var arr3 = arr.slice(1);
console.log(arr); // slice 를 사용하여도 원본엔 변함이 없다.
console.log(arr3);

var str = "a-b-c-d-e";
arr = str.split("-");
console.log(arr);

arr = [1, 2, 3, 4, 5];
arr2 = [4, 5, 6, 7];
arr + arr2;

var arr3 = arr.concat(arr2);
var arr3 = [0, ...arr, ...arr2, 20];
// var arr3 = [arr, arr2];;
console.log(arr3.toString());
// 자바와 달리 기본자료형에도 tostring 
console.log(num.toString());

var num = 1; // Integer num = 1;
// 자바스크립트의 모든 변수는 객체로 관리된다.
// 자바에서 int 대신 Integer 타입으로 바꾸어서 null 값에 대한 처리를 하기도 함  
// 자바에서와 달리, 혹은 더 강력한 객체지향
//

