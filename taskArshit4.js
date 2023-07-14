const students = [
  { name: 'Alice', age: 20, grades: [85, 92, 88] },
  { name: 'Bob', age: 17, grades: [76, 85, 90] },
  { name: 'Charlie', age: 19, grades: [90, 88, 94] },
  { name: 'David', age: 18, grades: [72, 68, 78] },
];

const result = students
  .filter((student) => student.age >= 18)
  .map((student) => {
    const sum = student.grades.reduce((a, b) => a + b);
    const avg = sum / student.grades.length;
    return { name: student.name, averageMarks: avg };
  })
  .filter((student) => student.averageMarks >= 70);

console.log(result);
