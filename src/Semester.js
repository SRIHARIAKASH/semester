import React from 'react'


function Semester(props){
    return(
        <div>
                 <table style={{border:"black",borderStyle:"solid"}}>
                     <thead>
                    <tr >
                        <th style={{border:"black",borderStyle:"solid"}}>StudentName</th>
                        <th style={{border:"black",borderStyle:"solid"}}>StudentDept</th>
                        <th style={{border:"black",borderStyle:"solid"}}>RollNumber</th>
                        <th style={{border:"black",borderStyle:"solid"}}>CGPA</th>
                    </tr>
                    </thead>
                    <tbody>
                    
            {
                    props.student.map((item,index)=>(
                        <tr> 
            <td style={{border:"black",borderStyle:"solid"}}>{item.studentName}</td>
            <td style={{border:"black",borderStyle:"solid"}}>{item.studentDept}</td>
            <td style={{border:"black",borderStyle:"solid"}}>{item.RollNumber}</td>
            <td style={{border:"black",borderStyle:"solid"}}>{item.CGPA}</td>
                    </tr>
                ))
            }
                    </tbody>
                    </table>
        </div>
    )
}
export default Semester;