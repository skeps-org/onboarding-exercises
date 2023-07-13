const nArr=[ 22, 1, 3,4,9,0,32,33]
// const initialValue = 0;
// const sumWithInitial = nArr.reduce(if(num)
  
// );

// console.log(sumWithInitial);

function cal(nArr){
    const arr1=nArr.filter(v=>(v%3));
    console.log(arr1)
    const arr2 =arr1.map(v=>(v*v));
    console.log(arr2.reduce((a,b=>a+b)));

    
}
calculateSum(nArr);