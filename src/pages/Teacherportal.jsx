import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import studentData from '../component/students/Student'
import StdForm from './StdForm'
import '../styles/Teacher.css'
const Teacherportal = () => {
    const[Btach,setBatch]=useState('')
    const[student,setStudent]=useState([])

    const handleBatch=(e)=>{
        const selectBatch=e.target.value
        setBatch(selectBatch)
        setStudent(studentData.slice(0,10))
    }
    const handleMark=(studentName,mark)=>{
        const updatedStudent=student.map((std)=>{
            if(std.name===studentName){
                return{...std,mark: mark}
            }
            return std
        })
        setStudent(updatedStudent)
    }
    
    return (
        <div>
            <form>
                <label>Select Batch</label>
                <select value={Btach} onChange={handleBatch}>
                    <option value="">select</option>
                    <option value="btech">Btech</option>
                    <option value="bca">BCA</option>
                    <option value="bsc">BSc Computer Science</option>
                </select>
                {student.length>0 && (
                    <div className='details'>
                        <h3>STUDENTS</h3>
                        {student.map((std)=>(
                            <div>
                            <label>{std.name+":"}</label>
                            <StdForm key={std.id}
                            student={student}
                            handleMark={handleMark}
                            />
                            </div>
                        ))}
                        <button onChange={()=>console.log(student)}>Submit</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Teacherportal
