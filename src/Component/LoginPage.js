import React from 'react';

function LoginPage() {
  let label = [];
  label = JSON.parse(localStorage.getItem('Form'));

  return (
    <div>
      <h1>{label[0].Name}</h1>
      <h1>{label[0].phonenumber}</h1>
      <h1>{label[0].Email}</h1>
      <h1>{label[0].password}</h1>
      <h1>{label[1].Name}</h1>
      <h1>{label[1].phonenumber}</h1>
      <h1>{label[1].Email}</h1>
      <h1>{label[1].password}</h1>
    </div>
  );
}
export default LoginPage;
