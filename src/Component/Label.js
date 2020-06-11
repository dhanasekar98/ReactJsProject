import React from 'react'

const Label=()=>{
return(
  <div>
<header className="LabelHeader">
    <form onSubmit={handleSubmit} className="form">

      <fieldset className="fieldset">

        <fieldset className="innerfieldset">

        <div className="phonenumberdiv">

        <label className="label">Phone Number</label>
        <input className="inputtext" type="phone-number" ></input>

        </div>

        </fieldset>

        <fieldset className="innerfieldset">
        

        <div>

        <label className="label">Name</label><br></br>
        <input className="inputtext"type="text"></input>

        </div>

        </fieldset>

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
);
};
 function handleSubmit(event) {
    event.preventDefault();
  }


export default Label