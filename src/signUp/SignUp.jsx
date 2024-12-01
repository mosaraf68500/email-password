import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const SignUp = () => {
  const [errormess, seterrormess] = useState(" ");
  const [seccess, setsuccess] = useState(false);
  const [showpassword, setshowpassword] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms=e.target.terms.checked;
    console.log(email, password ,terms);
    seterrormess(" ");
    setsuccess(false);

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!passwordRegex.test(password)) {
      seterrormess(
        "at least one digit, at least one upper case, at least one lower case, and at least one special character "
      );
    }

    if(!terms){
        seterrormess("check conditon")
        return;
    }

    if (password.length < 6) {
      seterrormess("password should be at least 6 character!");
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setsuccess(true);
      })
      .catch((error) => {
        console.log(error);
        seterrormess(error.message);
        setsuccess(false);
      });
  };
  return (
    <div>
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-3xl text-center">Sign Up form</h1>
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showpassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <div className="form-control">
                  <label className="label justify-start  cursor-pointer">
                  <input
                      type="checkbox"
                
                name="terms"
                      className="checkbox ml-2"
                    />
                    <span className="label-text mx-2">Accept</span>
                   
                  </label>
                </div>
                <button
                  onClick={() => setshowpassword(!showpassword)}
                  className="absolute right-4 top-12 "
                >
                  {showpassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
            {errormess && <p className="text-red-500">{errormess}</p>}

            {seccess && (
              <p className="text-green-500">sign up is successfully.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
