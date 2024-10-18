// var s = {x:10, z:true, no:10};

// s.no = 20;
// s.name = "nowDragon";
// s.kor = 80;
// s.eng = 80;
// s.mat = 60;
// s.total = function(){
//     return this.kor + this.eng + this.mat;
// }

// // 프로퍼티가 정의되지 않을 때에는 그냥 낫 디파인드가 나옴.
// delete s.no;
// console.log(s);
// console.log(s.no);
// console.log(s.total());

// var num = 10;
// num = Boolean(String(num));
// num = "0";
// num -= 0;
// num = !!num;
// console.log(num, typeof num);

// var num = 10;
// if(num){
    //     for(var i = 10; i--;){
        //         console.log(i);
        //     }
        // }
        
// num = 1;
// console.log(num, typeof num);
// console.log(3/0, 0/0);

function f(x) {
    x();
}

f(10);

function call() {
    var x = 10;
    console.log("call");
}

// 클로저를 통해 지역변수의 라이프사이클을 조정할 수 있다.

f(call);

function f2(){
    return function(){
        console.log("haha");
    }
}
// 메서드든 함수든 간에 선언과 호출을 정확하게 구분할 수 있어야 한다.

f2()(); // 이렇게 해야 하하 메세지를 볼 수 있다.
