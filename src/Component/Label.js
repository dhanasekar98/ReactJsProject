import React from 'react';
import './name.css';
import FormValidate from './FormValidate';
import ValidateAuth from './ValidateAuth';

const INTIAl_STATE = {
  phonenumber: '',
  Name: '',
  Email: '',
  password: '',
};

function Label() {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting,
  } = FormValidate(INTIAl_STATE, ValidateAuth);

  return (
    <div>
      <header className="LabelHeader">
        <form onSubmit={handleSubmit} className="form">
          <fieldset className="fieldset">
            <fieldset className="innerfieldset">
              <div className="phonenumberdiv">
                <label className="label">Phone Number</label>
                <input
                  className={errors.phonenumber && 'error-input'}
                  name="phonenumber"
                  type="phonenumber"
                  onBlur={handleBlur}
                  value={values.phonenumber}
                  placeholder="Phonenumber"
                  onChange={handleChange}
                ></input>
                <small>
                  {errors.phonenumber && (
                    <p className="error-text">{errors.phonenumber}</p>
                  )}
                </small>
              </div>
            </fieldset>

            <fieldset className="innerfieldset">
              <div>
                <label className="label">Name</label>
                <br></br>
                <input
                  className={errors.Name && 'error-input'}
                  type="text"
                  name="Name"
                  onBlur={handleBlur}
                  value={values.Name}
                  placeholder="Name"
                  onChange={handleChange}
                ></input>
                <small>
                  {errors.Name && <p className="error-text">{errors.Name}</p>}
                </small>
              </div>
            </fieldset>

            <fieldset className="innerfieldset">
              <div>
                <label className="label">Email</label>
                <br></br>
                <input
                  className={errors.Email && 'error-input'}
                  name="Email"
                  type="email"
                  value={values.Email}
                  placeholder="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                ></input>
                <small>
                  {errors.Email && <p className="error-text">{errors.Email}</p>}
                </small>
              </div>
            </fieldset>

            <fieldset className="passfieldset">
              <div>
                <label className="label">Password</label>
                <br></br>
                <input
                  className={errors.password && 'error-placeholder'}
                  name="password"
                  type="password"
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Password"
                  onChange={handleChange}
                />

                <small>
                  {errors.password && (
                    <p className="error-text">{errors.password}</p>
                  )}
                </small>
              </div>
            </fieldset>
          </fieldset>
          <h5 className="referralcode">Have a referral code?</h5>
          <button disabled={isSubmitting} className="submit">
            CONTINUE
          </button>
        </form>
      </header>
    </div>
  );
}

export default Label;
