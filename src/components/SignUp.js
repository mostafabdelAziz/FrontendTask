import React from "react";


function SignUp({history}) {
    return (
        <div class="container p-5 my-5 bg-light">
          <div class="row">
            <div class="col">
              <h3 class="text-primary">
                Guest Book
              </h3>
            </div>
          </div>
          <div class="row m-5">
            <div class="col">
              <h3>
                Create an account
              </h3>
            </div>
          </div>
        <div class="row m-5">
          <div class="col">
          <label class="text-secondary" for="username">User name:</label>
          </div>
          <div class="col">
          <input id="username" type="text" class="form-control"></input>
          </div>
        </div>
        <div class="row m-5">
          <div class="col">
          <label class="text-secondary" for="username">Email:</label>
          </div>
          <div class="col">
          <input id="username" type="email" class="form-control"></input>
          </div>
        </div>
        <div class="row m-5">
          <div class="col">
          <label class="text-secondary" for="password">Password:</label>
          </div>
          <div class="col">
          <input id="password" type="password" class="form-control"></input>
          </div>
        </div>
        <button type="submit" class="btn btn-success px-5">Sign Up</button>
     </div>
    );
  }
  
  export default SignUp;
