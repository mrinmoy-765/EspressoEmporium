import React, { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider';

const SignUp = () => {


    const {createUser} = useContext(AuthContext);


    const handleSignUp = e =>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;

       // console.log('checkinggg',email,password);

        createUser(email,password)
        .then(result =>{
            console.log('user created at firebase',result.user);
            const createdAt = result?.user?.metadata?.creationTime;
            const newUser = {name, email, createdAt}
            //save new user info to database
            fetch('http://localhost:5000/users',{
              method: 'POST',
              headers: {
              'content-type':'application/json'
              },
              body: JSON.stringfy(newUser)
            })
            .then(res => res.json())
            .then(data =>{
            //  console.log('user created to db', data);
            if(data.insertedId){
              alert('User Created at MOngoDB')
            }
            })
        })
        .catch(error =>{
            console.log('error', error)
        })
    }
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <form onSubmit={handleSignUp}>
              <label className="fieldset-label">Name</label>
              <input type="text" className="input" name="name" placeholder="Name" />
              <label className="fieldset-label">Email</label>
              <input type="email" className="input" name="email" placeholder="Email" />
              <label className="fieldset-label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />
              <button className="btn btn-neutral mt-4">Sign UP</button>
              </form>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp