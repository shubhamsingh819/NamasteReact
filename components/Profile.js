import React, { useEffect, useState } from 'react'

const Profile = (props) => {
    const [count,setCount] = useState(0);
    useEffect(() =>{
      //api call
      // console.log("useEffect")
    },[])
    // console.log("render")  

  return (
    <div>
        <h2> Profile functional components</h2>
       <h3>Name:{props.name}</h3> 
       <h3>Count:{count}</h3> 
       <button onClick={()=> setCount(count+1)}>Click</button>
    </div>
  )
}

export default Profile