import axios from 'axios'
import React, { useState } from 'react'
const StdForm = ({student,handleMark}) => {
    return(
        <div>
            <h4>{student.name}</h4>
            <input type='number'
            value={student.mark}
            onChange={(e)=>handleMark(student.name,e.target.value)}
            />
            {/* <button onClick={()=>handleMark(student.name,0)}>Reset</button> */}
        </div>
    )
}

export default StdForm
