// SignUp.jsx
import React from "react";
import "./signUp.css"; // To'g'ri import qilinayotganiga ishonch hosil qiling

function SignUp() {
  return (
    <div className="signUp">
      <div className="signUp-block">
        <div className="signUp-block-top">
          <h1>Create an account</h1>
          <small>
            Already have an account? <a href="#">Login</a>
          </small>
        </div>
        <div className="signUp-block-center">
          <button>
            <img
              src="./public/facebook.png"
              alt="facebook"
              width="25px"
              heigth="25px"
            />
            Join with facebook
          </button>
          <form>
            <div className="signUp-block-center-form-name">
            <div className="signUp-block-center-form-name-first">
            <label htmlFor="first">First name</label>
            <input type="text" id="first" name="first" />
            </div>
            <div className="signUp-block-center-form-name-last">
            <label htmlFor="first">Last name</label>
            <input type="text" id="first" name="first"/>
            </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
