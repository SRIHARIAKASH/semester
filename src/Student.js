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

        
                let [boolean,setBoolean] = useState(false);
            const AddStudent=()=>{
                if(boolean==false)
                {
                    setBoolean(true);
                }
                else{
                    setBoolean(false);
                }
            }
    let [name,setName]=useState("");
    let [Dept,setDept]=useState("");
    let [RollNo,setRollNo]=useState("");
    let [CGPA,setCGPA]=useState("");
    const updateName=(e)=>{
        setName(e.target.value);
    }   
    const updateDept=(e)=>{
        setDept(e.target.value);
    }   
    const updateRollno=(e)=>{
        setRollNo(e.target.value);
    }   
    const updateCGPA=(e)=>{
        setCGPA(e.target.value);
    }  
    const submitForm=()=>{
        let dummy={ 
            studentName:name,
             studentDept:Dept,
             RollNumber:RollNo,
             CGPA:CGPA,
            }
            let newStudentDetails = [...studentDetails,dummy];
            setstudentDetails(newStudentDetails);
            setName("");
            setDept("");
            setRollNo("");
            setCGPA("");
            setBoolean(false);
        
    }         
    return(
        <div>
            {boolean==true &&(<form>
        <h1>Add New Student Details</h1>
        <p>Enter Student Name:</p>
        <input
          type="text" onChange={updateName}
        />
        <p>Enter Student Dept:</p>
        <input
          type="text" onChange={updateDept}
        />
        <p>Enter Student RollNumber:</p>
        <input
          type="text" onChange={updateRollno}
        />
        <p>Enter CGPA:</p>
        <input
          type="text" onChange={updateCGPA}
        />
        <button onClick={submitForm}>
            Submit
        </button>
      </form>)}
        
            <Semester student= {studentDetails}/>
            <button onClick={AddStudent}>
                Add Student
            </button>
        </div>
    )

}

export default Student;