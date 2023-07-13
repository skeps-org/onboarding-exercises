const numbersArr =[100,50,3,6,9,10,12]
function calculateSum(numbersArr){
    var temp_arr1=numbersArr.filter(x=>(x%3));
    var temp_arr2=temp_arr1.map(x=>(x*x));
    var temp_arr3=temp_arr2.reduce((a,b)=>a+b);
    console.log(temp_arr3)
}

calculateSum(numbersArr);