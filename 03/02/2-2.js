// var f = function(x){
//     return x;
// }

// console.log(typeof f());
// console.log(typeof f("10"));
// console.log(typeof f([])); // 배열의 타입오브 때리면 오브젝트가 나온다..
// console.log(typeof f({x:10, y:20})); // 배열의 타입오브 때리면 오브젝트가 나온다..

// function myFunc(){
//     console.log("핫하");
// }
// console.log(typeof f(myFunc));
// f(myFunc);

// document.addEventListener("click", function(){
//     // 클릭 시 할 일 정의 가능
// });

// scope
// 지역변수 : 함수 내부에서 선언한 변수
// 지역변수가 있으려면 함수가 있어야 한다. 
// var b = 20; // 전역변수
// function test(){
//     // console.log(a);
//     // var a = 10;
//     // console.log(a); // 지역변수
//     var b = 30; // 문법적 허용이 존재,,! 
//     // 전역변수는 웬만하면 쓰지말아라(이름충돌)
//     // var 키워드를 사용 시 명확한 지역변수가되기 때문ㅇ에 에러가 발생한다.
// }
// // console.log(a);
// test();
// console.log(b);

for(var i = 0; i < 10; i++){

}
console.log(i);

{
    {
        {
            {
                {
                    {
                        {
                            var num = 30;
                        }
                    }
                }
            }
        }
    }
}
console.log(num);

// 구분의 기준은 언제나 함수 기반의 호이스팅이다.

function f1(){
    var local = 30;
    function f2(){
        console.log(local);
    }
    f2();
}
f1();

var a = 10;
var a = 20;
let number = 20;
// 변수 선언은 언제나 let 으로 할 것

// for(let s = 0; s < 10; s++){
//     console.log(s)
// }
// let 키워드를 사용했을 경우 블록 내부에서만 사용 가능하다.(개비스콘짤);
// console.log(s)

// let fn = function(x){
//     console.log("Hello" + x);
// }
// fn("world");

// 자바의 경우, final double PI = Math.PI;

// const PI = Math.PI;
// PI = 3.14;

// let 키워드를 사용할 경우 변수를 더이상 호이스팅의 대상으로 활용하지 않는다.


// function increaseCount(){
//     let k = 0;
//     function inner(){
//         k++;
//         return k;
//     }
//     return function() {
//         return inner;
//     }
// }

// let tmp = increaseCount();

// console.log(tmp());
// console.log(tmp());
// console.log(tmp());

// console.log(increaseCount()());
// console.log(increaseCount()());
// console.log(increaseCount()());

// 함수를 리턴해야 한다. 전역의 변수를 접근하지 않기 위함으로 클로저를 자주 사용한다. 
//
// 콜백 구조를 타파하기 위해 사용하기도 한다. 

// function f() {
//     f();
// }

// f();

console.log(this); // 빈 객체를 리턴한다. 

console.log(Number("123.456abce12345"));
console.log(parseInt("123.456abce12345"));
console.log(parseFloat("123.456abce12345"));

// NaN, Infinity
// finish
// finity
// isFinite

let posiInfi = Number.POSITIVE_INFINITY;
let negaInfi = Number.NEGATIVE_INFINITY;
let nan = NaN;

console.log(nan);
console.log( posiInfi);
console.log(negaInfi);

console.log(nan === nan);
// null 이퀄 null 처럼 애초에 비교했을때 false 값을 리턴한다. 따라서 Nan 형태를 알고 싶다면 
// is Nan 을 사용해서 물어봐야만 한다.
console.log(!!nan);

console.log("==================================");
console.log(posiInfi === Infinity);
console.log(negaInfi === -Infinity);
// 위와 비슷하게 isFinite 명령어를 사용해서 유한의 여부를 물어봐야 한다.

eval("let str = 'hello'; console.log(str)") // 내용을 알고 쓸 수 있어도 사용해선 안된다.


http://www.javaman.com/search?query=http://naver.com

let str = 'http://www.javaman.com/search?query=http:/www.naver.com#abcd';
console.log(encodeURI(str));
console.log(encodeURIComponent(str));

let resultStr = decodeURIComponent('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=www.%EC%9E%90%EB%B0%94%EB%A7%A8.com')
console.log(resultStr);

// 인코딩, 디코딩 관계에 있어서 무조건적으로 한글 도메인은 피해야 한다. 

let obj = { // 메서드란 그냥 객체에 종속된 함수 
    x:10,
    y:"aaaa",
    z:function(){} // 그저 객체 안의 함수라서, 메서드이다. 위의 x와 y는 필드이다.
};

class Student {

}
// 자바와 비슷하게 객체 변수들과 생성자 관련한 것들이 있다.
let student = new Student();