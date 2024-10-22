let obj = {
    x: 10,
    y:'1234',
    z: function(){}
};
console.log(obj.x);
obj.x = 20;
console.log(obj.x);
// 자바스크립트의 변수는 당연히도 들어가있는 값에 따라서 타입이 결정된다.

obj.x = function(){
    console.log('Hello World');
}
console.log(obj.x);
obj.x();

// 객체의 프로퍼티에 접근하는 방법
// 객체의 값 부분에는 문자열 형식으로도 삽입이 가능한 것이 있다.
obj['x']();
// 위와 비슷한 것으로 아규먼트가 있다. 아규먼트는 함수를 생성할 때 자동으로 만들어진다.
let arg = {'0':'a', '1':'b'};
// 식별자에 들어가는 키와 밸류의 형태를 유지해야 한다. 

// 객체에 프로퍼티 추가하는 방법
obj.a = undefined;
console.log(obj);
// 객체에 프로퍼티 제거하는 방법
delete obj.y; 
console.log(obj);
// 자바에는 없고, 자바스크립트에만 존재하는 연산자

// 객체 또는 프로퍼티에 
let subName = Symbol();
console.log(typeof subName);

let info = {
    [subName] : '자바스크립트',
    subName : '제이쿼리'
};
console.log(info, info[subName], info.subName, info[subName]);

