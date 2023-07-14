

function calculateAverageGrade(students)

{

    var result = [];

    students.map((student) => {

        var sum = 0;

        student.grades.forEach(element => {

            sum+=element;

        });

        var avg = sum/student.grades.length;

        if(student.age>=18 && avg>=70)

        {

            result = [...result, {name: student.name, avg}]

        }




    })

    return result;

}




const students = [

    { name: 'Alice', age: 20, grades: [85, 92, 88] },

    { name: 'Bob', age: 17, grades: [76, 85, 90] },

    { name: 'Charlie', age: 19, grades: [90, 88, 94] },

    { name: 'David', age: 18, grades: [72, 68, 78] },

  ];

  

  console.log(calculateAverageGrade(students));

  