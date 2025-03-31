import React from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Signin = () => {

  const  {signInUser} = useContext(AuthContext);

  const handleSignIn = e =>{
       e.preventDefault();

       const email = e.target.email.value;
       const password = e.target.password.value;

      // console.log(email,password);

      signInUser(email,password)
      .then(result =>{
        console.log(result.user);
      })
      .catch(error => {
          console.log(error);
      })

       e.target.email.value = "";
       e.target.password.value = "";
       



       
  }
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <form onSubmit={handleSignIn} >
              <label className="fieldset-label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
              <label className="fieldset-label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
              </form>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;

