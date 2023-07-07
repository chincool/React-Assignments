let arr = [4,7,3,8,2,9,1];

function square(a){
    var sq = a*a;
    return sq;
}

function isEven(a)
{
    return a%2 == 0;
}

function sum(arr)
{
    let sum = 0;
    for(let i = 0; i < arr.length; ++i)
    {
        sum += arr[i];
    }
    return sum;
}

function double(arr)
{
    for(let i = 0; i < arr.length; ++i)
    {
        arr[i] *= 2;
    }
    return arr;
}

function map(arr,fun)
{
    let resArr = [];
    for(let i = 0; i < arr.length; ++i)
    {
        resArr.push(fun(arr[i]));
    }
    return resArr;
}

function filter(arr,fun)
{
    let resArr = []
    for(let i = 0; i < arr.length; ++i)
    {
        if(fun(arr[i]))
        resArr.push(arr[i]);
    }
    return resArr;
}

function reduce(arr,fun)
{
    return fun(arr);
}

function forEach(arr,fun)
{
    return fun(arr);
}

console.log(arr);
console.log(map(arr,square));
console.log(filter(arr,isEven));
console.log(reduce(arr,sum));
console.log(forEach(arr,double));