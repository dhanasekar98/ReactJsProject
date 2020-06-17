export default function ValidateAuth(values) {
  let errors = {};
  let label = [];

  label = JSON.parse(localStorage.getItem('Form'));

  const emailReg = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i);
  if (!values.Email) {
    errors.Email = 'Email Required';
  } else if (!emailReg.test(values.Email)) {
    errors.Email = 'Invlid Email ';
  }
  if (!values.Password) {
    errors.Password = 'Required Password';
  } else if (values.Password.length < 6) {
    errors.Password = 'Password must be at least 6 characters';
  }

  for (let i = 0; i < label.length; i++) {
    if (values.Email === label[i].Email) {
      if (values.Password === label[i].password) {
        errors.isLogin = null;
      } else if (values.Password !== label[i].password) {
        errors.isLogin = 'Invalid Password';
      }
    }
  }
  return errors;
}
