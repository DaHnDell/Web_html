const arr = [10, 20, 30, 40, 50];

// filter, foreach 사용 
// 10, 30, 50 만 출력

function f(x){
    return x % 20 != 0;
}

function f2(x){
    console.log(x);
}
function f3(x){
    return x ** 2 / 10;
}

arr.filter(f).forEach(f2);
// arr.filter(function(value, index, array))
// forEach(a => console.log(a));
// arr.map(function, index, array)
arr.filter(i => i % 20 == 10).forEach(a => console.log(a));
arr.filter(f).forEach(f2);
arr.filter(i => (i % 20 == 10)).forEach(a => console.log(a*a/10));
arr.filter(f).map(f3).forEach(f2);
arr.filter(x => x % 20 != 0).map(x => x ** 2 / 10).forEach(f2);


arr
.filter(function(x){
    return x % 20 != 0
})
.map(function(x){
    return x ** 2/10
})
.forEach(function(x){
    console.log(x);
})

const arr2 = [1, 2, 3, 4, 5];
const result = arr2.reduce(function(acc, curr, ){
    console.log(acc);
    return acc + curr;
// 1차원 배열에서 0차원으로,, 그래서 리듀스는 차원을 줄인다고 하고,,
// 반대로 group by 는 깊이를 줄인다는 식의 표현을 한다. 보통 sql에서 자주 사용된다.
}, 0)

console.log(result);

