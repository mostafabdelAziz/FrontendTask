import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";


function Login() {

var[userName,setUserName]=useState('');
var[password,setPassword]=useState('');

function handelUserName(e) {
  setUserName(e.target.value)
}
function handelPassword(e) {
  setPassword(e.target.value)
}
    return (
      <div class="container p-5 my-5 bg-light">
        <div class="row bg-bg-right">
            <div class="col">
              <h3 class="text-primary">
                Guest Book
              </h3>
            </div>
        </div>
      <div class="row m-5">
        <div class="col">
          <h3>
            Sign in
          </h3>
        </div>
      </div>
    <div class="row m-5">
      <div class="col">
      <label class="text-secondary" for="username">User name:</label>
      </div>
      <div class="col">
      <input id="username" type="text" defaultValue={userName} onChange={handelUserName} class="form-control"></input>
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
      <input id="password" type="password" defaultValue={password} onChange={handelPassword} class="form-control"></input>
      </div>
    </div>
    <button type="submit" onClick={async()=>{await axios({
    method: "post",
    url: `http://localhost:4000/api/auth/`,
    data:JSON.stringify({email:userName,password:password}),
    config: {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "content-Type": "application/json"
      }
    }
  }).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});}} class="btn btn-primary px-5">Log In</button>
 </div>
    );
  }
  
  export default Login;
