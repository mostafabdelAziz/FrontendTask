import React,{useState} from "react";
import axios from "axios";

function SignUp({history}) {
  var[userName,setUserName]=useState('');
  var[email,setEmail]=useState('');
  var[password,setPassword]=useState('');
  
  function handelUserName(e) {
    setUserName(e.target.value)
  }
  function handelEmail(e) {
    setEmail(e.target.value)
  }
  function handelPassword(e) {
    setPassword(e.target.value)
  }

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
          <input id="username" type="text" class="form-control" defaultValue={userName} onChange={handelUserName}></input>
          </div>
        </div>
        <div class="row m-5">
          <div class="col">
          <label class="text-secondary" for="email">Email:</label>
          </div>
          <div class="col">
          <input id="email" type="email" class="form-control" defaultValue={email} onChange={handelEmail}></input>
          </div>
        </div>
        <div class="row m-5">
          <div class="col">
          <label class="text-secondary" for="password">Password:</label>
          </div>
          <div class="col">
          <input id="password" type="password" class="form-control" defaultValue={password} onChange={handelPassword}></input>
          </div>
        </div>
        <button onClick={async()=>{
              console.log({username:userName,email:email,password:password})
          await axios({
    method: "post",
    url: `http://localhost:4000/api/users/`,
    data:{name:userName,email:email,password:password},
    config: {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "content-Type": "application/json"
      }
    }
  }).then((res)=>{history.push("/guestbook")}).catch((err)=>{console.log(err)});}}  type="submit" class="btn btn-success px-5">Sign Up</button>
     </div>
    );
  }
  
  export default SignUp;
