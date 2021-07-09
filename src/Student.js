import React, { useState } from 'react'
import Semester from './Semester';

function Student(){
    let [studentDetails,setstudentDetails]=useState([{ 
    studentName:"Akash",
     studentDept:"MCA",
     RollNumber:"123456",
     CGPA:"8.5",
    },{ 
        studentName:"Sivasai",
         studentDept:"MCA",
         RollNumber:"789123",
         CGPA:"9.5",
        },
        { 
            studentName:"balaji",
             studentDept:"MCA",
             RollNumber:"543445",
             CGPA:"9.0",
            },])

            let dummy={ 
                studentName:"Ram",
                 studentDept:"Btech",
                 RollNumber:"764574",
                 CGPA:"9.3",
                }
            const AddStudent=()=>{
                    let newstudentDetails=[...studentDetails,dummy];
                    setstudentDetails(newstudentDetails)
            }
    return(
        <div>
            <Semester student= {studentDetails}/>
            <button onClick={AddStudent}>
                Add 
            </button>
        </div>
    )

}

export default Student;