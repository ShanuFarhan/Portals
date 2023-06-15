import React from 'react'
import axios from 'axios'
const Home = () => {
  const getData= async ()=>{
    const data=await axios.get('http://localhost:8080/employee')
    console.log(data)
  }
  getData()
  return (
    <><div>
          Home
      </div>
     </>
  )
}

export default Home
