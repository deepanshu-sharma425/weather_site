
import React from 'react';
import './error.css';

function ErrorPage({ message }) {
  return (
    <div className="errorpage">
      <h1>City does not exist</h1>
      <p>{message || "Something went wrong."}</p>
      <img
        src="https://i.imgur.com/qIufhof.png"
        alt="Error Illustration"
        className="errorimage"
      />
    </div>
  );
}

export default ErrorPage;
