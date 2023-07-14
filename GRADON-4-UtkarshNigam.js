const students = [
    { name: 'Alice', age: 20, grades: [85, 92, 88] },
    { name: 'Bob', age: 17, grades: [76, 85, 90] },
    { name: 'Charlie', age: 19, grades: [90, 88, 94] },
    { name: 'David', age: 18, grades: [72, 68, 78] },
];

function calculateAverageGrade(students){
    const arr1=students.filter(v=>(v.age>=18));
    // console.log(arr1);

    const arr2=arr1.map(v=>{
    var temp1=v.grades;
    // console.log(temp1);

    const temp2=temp1.reduce((a,b)=>(a+b));
    // console.log(temp2);

    v.grades=temp2/3;
    return v;

    })
    console.log(arr2);
}

calculateAverageGrade(students);