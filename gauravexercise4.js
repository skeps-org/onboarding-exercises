const students = [
    { name: 'Alice', age: 20, grades: [85, 92, 88] },
    { name: 'Bob', age: 17, grades: [76, 85, 90] },
    { name: 'Charlie', age: 19, grades: [90, 88, 94] },
    { name: 'David', age: 18, grades: [72, 68, 78] },
  ];
  
  myFunction(students);
  
  function myFunction(students) {
      var ans=[];
      for(var ind=0;ind<students.length;ind++){
          var arr=students[ind].grades;
          var sum=0;
          for(var j=0;j<arr.length;j++){
              sum+=arr[j];
          }
          var kp={
              "name":students[ind].name,
              "averageGrade":sum/arr.length
          }
          if(students[ind].age>=18 && sum>=70){
              ans.push(kp);
          }
    }
    console.log(ans);
    return ans;
  }