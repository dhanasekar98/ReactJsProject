import React from 'react';

function FormValidate(initalState, validate) {
  const [values, setValues] = React.useState(initalState);

  const [errors, setErrors] = React.useState({});

  const [isSubmitting, setSubmitting] = React.useState(false);

  const Details = [];
  const val = {
    phonenumber: '9578641009',
    Name: 'Dhand',
    Email: 'dhanasekar@gmail.com',
    password: '03071998',
  };
  Details.push(val);

  React.useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        console.log('', values.phonenumber, values.Name);
        Details.push(values);
        localStorage.Form = JSON.stringify(Details);
        alert('SignUp sucessfully');

        setValues(initalState);
        setSubmitting(false);
      } else {
        setSubmitting(false);
      }
    }
  }, [errors]);

  function handleChange(event) {
    event.preventDefault();
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }
  function handleBlur() {
    const validateErrors = validate(values);
    setErrors(validateErrors);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const validateErrors = validate(values);
    setErrors(validateErrors);
    setSubmitting(true);
  }

  return {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting,
  };
}

export default FormValidate;
