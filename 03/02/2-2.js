var f = function(x){
    return x;
}

console.log(typeof f());
console.log(typeof f("10"));
console.log(typeof f([])); // 배열의 타입오브 때리면 오브젝트가 나온다..
console.log(typeof f({x:10, y:20})); // 배열의 타입오브 때리면 오브젝트가 나온다..

function myFunc(){
    console.log("핫하");
}
console.log(typeof f(myFunc));
f(myFunc);

document.addEventListener("click", function(){
    // 클릭 시 할 일 정의 가능
})