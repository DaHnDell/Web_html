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
var num = 1; // Integer num = 1;
console.log(num.toString());

// 자바스크립트의 모든 변수는 객체로 관리된다.
// 자바에서 int 대신 Integer 타입으로 바꾸어서 null 값에 대한 처리를 하기도 함  
// 자바에서와 달리, 혹은 더 강력한 객체지향

// 함수
// hoist

// js에서도 전체 스캔을 한다. 이후 함수 및 변수 정리를 실행한다. 

console.log(f(10)); 
function f(x){
    return x * x;
}

console.log(abc);
var abc = "1234";

// 자바는 블록 단위의 수행을 하기 때문에 
// 변수 선언 후 타입이 함수인 대상을 할당0000
// 익명 함수 
var f2 = function(x) {
    return x * x;
}
var num = 10;
// f2도 변수이다. 그저 타입이 함수일 뿐.

console.log(f2(20));
console.log(function(x){
    return x * x;
}(20));

// arr.length


(function(str){
    console.log("hello " + str);
})("자바스크립트");

((str) => {
    console.log("hello " + str);
})("js");
// 이런 식으로 할 경우 변수 자체를 따로 선언할 필요도 없다.

function process(){
    return 10;
    var kor = 90;
    var eng = 90;
    var mat = 90;
    var avg = (kor + eng + mat) /3;
    return avg;
}
console.log("홍길동 학생의 평균은 " + process());

// 두 수를 입력받아 그 중 가장 큰 값을 반환하는 함수

function max(x, y){
    // return x - y < 0 ? y : x;
    return x < y ? y : x;
}
console.log(max(10, 5));

// 여러 수를 입력받아 그 중 큰 값을 반환하는 함수

function max2() {
    var max = -Number.MAX_VALUE;
    for(var i = 0; i < arguments.length; i++){
        if(typeof arguments[i !== "number"]){
            return undefined;
        }

        if(arguments[i] > max){
            max = arguments[i];
        }
    }
    return max == -Number.MAX_VALUE ? undefined : max;

    // 불린과 스트링일 때 
}
max2("10", 20, 30, 40);
// 길이가 있다 = 반복문을 돌릴 수 있다