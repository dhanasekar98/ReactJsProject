import React from 'react';
import './name.css';
import FormValidateLogin from './FormValidateLogin';
import ValidateAut from './ValidateAut';
import { Link } from 'react-router-dom';
let INTIAl_STATE = {
  Email: '',
  Password: '',
  isLogin: '',
};

const Signin = () => {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting,
  } = FormValidateLogin(INTIAl_STATE, ValidateAut);

  return (
    <div>
      <header className="LabelHeader">
        <form onSubmit={handleSubmit} className="form">
          <fieldset className="signfieldset">
            <fieldset className="innerfieldset">
              <div>
                <label className="label">Email</label>
                <br></br>

                <input
                  className="inputtext"
                  type="email"
                  name="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.Email}
                ></input>
                {errors.Email && <p className="error-text">{errors.Email}</p>}
              </div>
            </fieldset>

            <fieldset className="passfieldset">
              <div>
                <label className="label">Password</label>
                <br></br>

                <input
                  className="inputtext"
                  type="password"
                  name="Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.Password}
                ></input>
                {errors.Password && (
                  <p className="error-text">{errors.Password}</p>
                )}
              </div>
            </fieldset>
          </fieldset>
          {errors.isLogin && <p className="error-text">{errors.isLogin}</p>}

          <h5 className="referralcode">Have a referral code?</h5>

          <Link to="/LoginPage" aria-disabled={isSubmitting}>
            <button className="submit" disabled={isSubmitting}>
              CONTINUE
            </button>
          </Link>
        </form>
      </header>
    </div>
  );
};
export default Signin;
