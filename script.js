/* 
Your customer is a school. They want you to write a program that will accept a student's attendance record for a 6-day week and return whether or not a student's attendance is satisfactory. 

 The record will be a string containing 6 uppercase characters, representing the student's attendance for each day in the week, Monday through Saturday. The record contains the following three characters only: 

'A' : Absent. 
'L' : Late. 
'P' : Present. 

 Within the 6-day week, the attendance is not satisfactory if the student is absent twice or is late more than 2 days in a row. 

 Examples: 

Input: "PPALLP" 
Output: True 

 Input: "PPALLL" 
Output: False 

 Input: "PAPALL" 
Output: False 

 Input: "PLPALL" 
Output: True 
*/

let testArrays = ["PPALLP", "PPALLL", "PAPALL", "PLPALL"];

function checkString() {

     let myArrayForAs = [];

     testArrays.forEach(testArray => {

          let charArray = testArray.split("");

          charArray.forEach(char => {
               if(char === "A") {
                    myArrayForAs.push(char);
               } 
          });

          if(myArrayForAs.length >= 2) {
               console.log("2 Absences: ", "FALSE");
               myArrayForAs.length = 0;
          } else if(array.includes("LLL")) {
               console.log("3 Lates: ", "FALSE")
               myArrayForAs.length = 0;
          } else {
               console.log("TRUE")
               myArrayForAs.length = 0;
          }
     });
}

checkString();