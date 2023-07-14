const numbersArr=[33,2,4,5,6,78]
function calculateSum(numbersArr){
    const arr1= numbersArr.filter(v=>(v%3));
    const arr2=arr1.map(v=>(v*v));
    console.log(arr2.reduce((a,b)=>a+b));
}

calculateSum(numbersArr);