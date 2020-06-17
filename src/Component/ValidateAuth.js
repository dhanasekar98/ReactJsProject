export default function ValidateAuth(values) {
  let errors = {};
  const emailReg = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i);
  if (!values.phonenumber) {
    errors.phonenumber = 'Minimum 10 digit number required';
  } else if (values.phonenumber.length > 10 || values.phonenumber.length < 10) {
    errors.phonenumber = '10 digit number required';
  }

  if (!values.Name) {
    errors.Name = 'Minimum 3 charaters are required';
  } else if (values.Name.length < 3) {
    errors.Name = 'Minimum 3 charaters are required  ';
  }
  if (!values.Email) {
    errors.Email = 'Email Required';
  } else if (!emailReg.test(values.Email)) {
    errors.Email = 'Invlid Email ';
  }
  if (!values.password) {
    errors.password = 'Required Password';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }
  return errors;
}
