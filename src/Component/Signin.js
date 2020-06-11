import React from 'react'
import './name.css'

const Signin=()=>{


    function handleSubmit(event) 
    {
        event.preventDefault();
    }

    return(

        <div>

        <header className="LabelHeader">


          <form onSubmit={handleSubmit} className="form">

             <fieldset className="signfieldset">

        

                 <fieldset className="innerfieldset">

                    <div>

                        <label className="label">Email</label><br></br>

                        <input className="inputtext" type="email"></input>

                    </div>
        
                  </fieldset>

                   <fieldset className="passfieldset">


                    <div>

                      <label className="label">Password</label><br></br>

                      <input className="inputtext"type="password"></input>

                    </div>

                   </fieldset>
        
 
                  </fieldset>

                     <h5 className="referralcode">Have a referral code?</h5>
            
                     <button className="submit">CONTINUE</button>


      


            </form>

        </header>



        </div>
    )
}
 export default Signin