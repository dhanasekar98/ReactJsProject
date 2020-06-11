import React from 'react'
import Signin from './Signin'

import { Link } from 'react-router-dom'



const Home=()=>{
    return (
        <div>
            <header className="sam">
                <h1 className="SignUp">Sign In <img src="images/flower.png" alt="" align="right"/></h1>
                 <div className="or">or 
                 <Link to="/" target="_blank" className="login">
                 SignUp the account
                 </Link>
                 </div>
                
            </header>
           
           <Signin/>

        </div>
    )
}
export default Home