import React from 'react'
import './App.css'
const login = () => {
  return (
    <>
        <div className='box'>
            <h3>login</h3>
            <div class="container">
                 <label for="uname"><b>Username</b></label>
                 <input type="text" placeholder="Enter Username" name="username" required/>

                     <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" required/>

                 <button type="submit">Login</button>
                 <label></label>
                 </div>
        </div>
    </>
  )
}

export default login